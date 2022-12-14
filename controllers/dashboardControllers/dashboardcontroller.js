//Controller
export default class DashboardController {
  //constructor Dependency Injection
  constructor(mgr) {
    this.repoManager = mgr;
  }

  getOrderList = async (req, res) => {
    console.log("Fetching All OrdersList");
    let allOrders = await this.repoManager.getOrderList();
    res.send(allOrders.data);
  };

  getAvailableProducts = async (req, res) => {
    console.log("Fetching All Available Products");
    let result = await this.repoManager.getAvailableProducts();
    res.send(result.data);
  };

  getZeroAvailableProducts = async (req, res) => {
    console.log("Fetching Unavailable Products");
    let result = await this.repoManager.getZeroAvailableProducts();
    res.send(result.data);
  };

  getCategoryList = async (req, res) => {
    console.log("Fetching Category List");
    let result = await this.repoManager.getCategoryList();
    res.send(result.data);
  };

  getCustomerProfile = async (req, res) => {
    console.log("Fetching Customer Profile");
    let result = await this.repoManager.getCustomerProfile();
    res.send(result.data);
  };

  getSellerProfile = async (req, res) => {
    console.log("Fetching Seller Profile");
    let result = await this.repoManager.getSellerProfile();
    res.send(result.data);
  };

  getSellerOrders = async (req, res) => {
    console.log("Fetching Seller Orders");
    let result = await this.repoManager.getSellerOrders();
    res.send(result.data);
  };

  getSellerProducts = async (req, res) => {
    console.log("Fetching Seller Profile");
    let result = await this.repoManager.getSellerProducts();
    res.send(result.data);
  };
}