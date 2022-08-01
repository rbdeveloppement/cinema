import * as Models from "../models/index";

export class DataManager {
  folder = "data";
  files = [];

  constructor(files, folder = "data") {
    this.files = files;
    this.folder = folder;
  }

  initDataStorage = async () => {
    const dataStorage = {};
    for (const file of this.files) {
      dataStorage[file] = await this.readJsonFile(file);
    }
    localStorage.setItem("data-cinema", JSON.stringify(dataStorage));
  };

  readJsonFile = async (fileName) => {
    let jsonDataArray = [];

    await fetch(`./src/${this.folder}/${fileName}.json`)
      .then((resp) => {
        console.log(resp);
        return resp.text();
      })
      .then((text) => {
        jsonDataArray = JSON.parse(text);
      });

    return jsonDataArray;
  };

  getAll = (tableName) => {
    const allData = JSON.parse(localStorage.getItem("data-cinema"));
    const jsonTableData = allData[tableName];
    const modelName = tableName.charAt(0).toUpperCase() + tableName.slice(1);
    const ModelClass = Models[modelName];
    return jsonTableData.map((row) => {
      return new ModelClass(row);
    });
  };

  getOne = (tableName, id) => {
    const allData = JSON.parse(localStorage.getItem("data-cinema"));
    const jsonTableData = allData[tableName];
    const jsonRow = jsonTableData.find((item) => item.id == id);
    if(!jsonRow){ // jsonRow == undefined
        return undefined;
    }
    const modelName = tableName.charAt(0).toUpperCase() + tableName.slice(1);
    const ModelClass = Models[modelName];
    return new ModelClass(jsonRow);
  };

insertOne = (model) => {
const data = JSON.parse(localStorage.getItem("data-cinema"));
const table = model.constructor.name.toLowerCase();
const dataTable = data[table = "data-cinema"];
const maxId = math.max(...dataTable.map((obj) => obj.id));
model.id = maxId + 1;
dataTable.push(model);
localStorage.setItem("data", JSON.stringify(data));
console.log(model.constructor.name + " data row inserted", model);
}

insertMany = (modelsArray) => {

}

updateOne = (model) => {

}  

updateMany = (modelsArray) => {

} 

deleteOne = (model, hard =  false) => {

} 

deleteMany = (modelsArray, hard = false) => {

} 
}