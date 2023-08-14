const state = {
    sum: 1,
    deliveryOrder: 0,
    carNumber: 0,
    orders: 546,
    // 不带无人机的地图信息
    otherNumber: [[], []],
    //带有无人机的地图的信息
    myNumber: [[], []],
}
const mutations = {
    JIA: (state, value) => {
        state.sum += value
    },
    Revise(state, delivery) {
        state.deliveryOrder = delivery[0]
        state.carNumber = delivery[1]
    },
    CarNumber(state) {
        state.carNumber -= 1
    },
    Delivery(state) {
        state.deliveryOrder -= 1
        state.orders += 1
    },

    otherMap(state, otherNumber) {

        // var list = otherNumber[2]
        // for (var i = 0; i < list.length; ++i) {
        //     for (var j = 0; j < i; ++j) {
        //         if (list[i] < list[j]) {
        //             let t = otherNumber[2][i]
        //             otherNumber[2][i] = otherNumber[2][j]
        //             otherNumber[2][j] = t
        //             t = otherNumber[1][i]
        //             otherNumber[1][i] = otherNumber[1][j]
        //             otherNumber[1][j] = t
        //             t = otherNumber[0][i]
        //             otherNumber[0][i] = otherNumber[0][j]
        //             otherNumber[0][j] = t
        //         }
        //     }
        // }

        // state.otherNumber[0][0] = (otherNumber[0][0] + otherNumber[0][2]) / 1000
        // state.otherNumber[0][1] = Math.round(otherNumber[0][1] / 60)
        // state.otherNumber[0][2] = otherNumber[0][0] * 0.001 + otherNumber[0][2] * 0.0005
        // state.otherNumber[0][2] = Math.round(state.otherNumber[0][2]);



        state.otherNumber[1] = otherNumber[1]
        state.otherNumber[0][0] = Math.round(otherNumber[0][0] + otherNumber[0][2]) / 1000
        state.otherNumber[0][1] = Math.round(otherNumber[0][1] / 60)
        state.otherNumber[0][2] = otherNumber[0][0] * 0.001 + otherNumber[0][2] * 0.0005
        state.otherNumber[0][2] = Math.round(state.otherNumber[0][2]);
        console.log(state.otherNumber);
    },
    myMap(state, myNumber) {

        // for (var i = 0; i < myNumber[2].length; ++i) {
        //     for (var j = 0; j < i; ++j)
        //         if (myNumber[2][i] < myNumber[2][j]) {
        //             let t = myNumber[2][i]
        //             myNumber[2][i] = myNumber[2][j]
        //             myNumber[2][j] = t
        //             t = myNumber[1][i]
        //             myNumber[1][i] = myNumber[1][j]
        //             myNumber[1][j] = t
        //             t = myNumber[0][i]
        //             myNumber[0][i] = myNumber[0][j]
        //             myNumber[0][j] = t
        //         }
        // }

        state.myNumber[1] = myNumber[1]
        state.myNumber[0][0] = Math.round(myNumber[0][0] + myNumber[0][2]) / 1000
        state.myNumber[0][1] = Math.round(myNumber[0][1] / 60)
        state.myNumber[0][2] = myNumber[0][0] * 0.001 + myNumber[0][2] * 0.0005
        state.myNumber[0][2] = Math.round(state.myNumber[0][2]);
        console.log(state.myNumber, 52);
    }
}
export default {
    namespaced: true,
    state,
    mutations,

}