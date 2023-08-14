<template>
  <div style="margin: 15px;">
    <div>
      <el-input v-model="listQuery" placeholder="请输入用户姓名" style="width: 200px;"></el-input>
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" style="margin-left:15px;" @click="NameFind
      ">
        查找
      </el-button>
    </div>

    <el-table border :data="tableDate" v-loading="listLoading" style="margin-top: 15px;">
      <el-table-column label="ID" prop="id" sortable="custom" align="center" width="80px">
        <template slot-scope="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="运单编号" width="200px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.sendGoodCustomNo }}</span>
        </template>
      </el-table-column>
      <el-table-column label="发货人姓名" min-width="200px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.sendGoodCustom }}</span>
        </template>
      </el-table-column>
      <el-table-column label="订单状态" min-width="200px" align="center">
        <template slot-scope="{row}">

          <el-tag :type="row.state | statusFilter">
            {{ row.state }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column label="货物重量（kg）" min-width="200px" align="center">
        <template slot-scope="{row}">
          <el-tag>{{ row.weight }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="发货时间" min-width="200px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.actualDelivertData }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="{row,$index}">
          <el-button type="primary" size="mini" @click="handleUpdate(row)">
            修改
          </el-button>
          <el-button v-if="row.status!='deleted'" size="mini" type="danger" @click="handleDelete(row,$index)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination v-show="total>0" @size-change="handleSizeChange" @current-change="handleCurrentChange"
        :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="sizes, prev, pager, next" :total="total">
      </el-pagination>
    </div>
    <el-dialog title="修改" :visible.sync="dialogFormVisible">
      <el-form ref="dataForm" :model="temp" label-position="left" label-width="128px"
        style="width: 600px; margin-left:50px;">
        <el-form-item label="订货单号">
          <el-input type="text" placeholder="请输入用户电话" v-model="temp.sendGoodCustomNo"> </el-input>
        </el-form-item>
        <el-row :span=24>
          <el-col :span="10">
            <el-form-item label="收货客户" required>
              <el-input placeholder="请输入用户姓名" v-model="temp.acceptGoodCustom"> </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10" :offset="4">
            <el-form-item label="收货客户电话" required>
              <el-input type="text" placeholder="请输入用户电话" v-model="temp.acceptGoodCustomTel"> </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="发货地址" prop="address">
          <el-input v-model="temp.acceptAddress" placeholder="请输入发货地址"></el-input>
        </el-form-item>
        <el-form-item label="发货日期" prop="delivery">
          <el-input type="text" placeholder="请输入发送日期" v-model="temp.actualDelivertData"> </el-input>
        </el-form-item>
        <!-- <el-form-item label="Date" prop="timestamp">
          <el-date-picker v-model="temp.timestamp" type="datetime" placeholder="Please pick a date" />
        </el-form-item>
        <el-form-item label="Title" prop="title">
          <el-input v-model="temp.title" />
        </el-form-item>
        <el-form-item label="Status">
          <el-select v-model="temp.status" class="filter-item" placeholder="Please select">
            <el-option v-for="item in statusOptions" :key="item" :label="item" :value="item" />
          </el-select>
        </el-form-item>
        <el-form-item label="Imp">
          <el-rate v-model="temp.importance" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" :max="3" style="margin-top:8px;" />
        </el-form-item>
        <el-form-item label="Remark">
          <el-input v-model="temp.remark" :autosize="{ minRows: 2, maxRows: 4}" type="textarea" placeholder="Please input" />
        </el-form-item> -->
      </el-form>
      <!-- <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          Cancel
        </el-button>
        <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">
          Confirm
        </el-button>
      </div> -->
    </el-dialog>
  </div>
</template>
<script>
import { fetchForm, fetchFind } from '@/api/article'
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
export default {
    name:'ConsignmentNotes',
    components: { Pagination },
    directives: { waves },
    filters: {
      statusFilter(state) {
        const statusMap = {
          待发: 'success',
          未到: 'info',
          待送: 'danger'
        }
        return statusMap[state]
      },
      typeFilter(type) {
        return calendarTypeKeyValue[type]
      }
    },
    data() {
        return {
            tableDate:null,
            list: null,
            total: 0,
            size:10,
            listLoading: true,
            dialogFormVisible:  false,
            listQuery: '',
            temp:{
                address: '',
                comment_disabled: '',
                consignee: '',
                consigner: '',
                display_time: '',
                forecast: '',
                id: '',
                importance: '',
                numbering: '',
                pageviews: '',
                status: '',
                telephone: '',
            },
          
        }
    },
    mounted() {
        this.getList()
    },
    methods:{
        NameFind(){
          fetchFind(this.listQuery).then(response=>{
            this.$message({
              message:response.message,
              type:'success'
            })
            this.total = response.data.length
            this.list  = response.data.items
            this.page = 1
            getTableDate()
          })
        },
        getList(){
            this.listLoading = true
            fetchForm().then(response=>{
              console.log(response);
                this.total = response.data.total
                this.list = response.data.items
                this.getTableDate()
            })
            setTimeout(() => {
                    this.listLoading = false
                }, 1.5 * 1000)
        },
        getTableDate(){
            if(!this.page){
                    this.tableDate = this.list.slice(0,10)
                }
                else{
                    this.tableDate = this.list.slice(
                        (this.page - 1) * this.size,
                        this.page * this.size
                    ) 
                }
        },
        handleCurrentChange(val){
            this.page =val
            this.getTableDate();
        },
        handleSizeChange(val){
            this.size = val;
            this.page = 1;
            console.log();
            this.getTableDate();
        },
        handleUpdate(row){
            this.temp = row
            console.log(this.temp);
            this.dialogFormVisible = true
        },
        handleDelete(row,index){
          
        }
    }
}
</script>