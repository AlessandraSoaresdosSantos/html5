var request = indexedDB.open("ExemploHTML5");
 request.onupgradeneeded = function()
 {
  var db = request.result;
  var store = db.createObjectStore("locadoras", {keyPath: "codigo"});
  var nomeIdx = store.createIndex("porNome", "titulo", {unique: true});
  var fabricanteIdx = store.createIndex("porFabricante", "fabricante");
  
  store.put({codigo: 1,
          nome: "DVD - Batman O Cavaleiro das Trevas - A Trilogia",
       fabricante: "Warner Bros",
     preco: 39.90});
 store.put({codigo: 2,
    nome: "Blu-ray - O Homem de Aço",
      fabricante: "Warner Bros",
     preco: 69.90});
 store.put({codigo: 3,
    nome: "DVD - Wolverine Imortal",
       fabricante: "Fox",
       preco: 19.90});

 };
 request.onsuccess = function() {
    db = request.result;
};