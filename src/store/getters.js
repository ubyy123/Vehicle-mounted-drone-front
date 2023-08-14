const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
  errorLogs: state => state.errorLog.logs,
  sum: state => state.mapMessage.sum,
  deliveryOrder: state => state.mapMessage.deliveryOrder,
  carNumber: state => state.mapMessage.carNumber,
  orders: state => state.mapMessage.orders,
  otherNumber: state => state.mapMessage.otherNumber,
  myNumber: state => state.mapMessage.myNumber,

}
export default getters
