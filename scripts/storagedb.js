var request = indexedDB.open("lojinha");
 request.onupgradeneeded = function()
 {
  // Se o banco de dados não existir ainda, cria objetos de armazenamento
  var db = request.result;
  var store = db.createObjectStore("produtos", {keyPath: "codigo"});
  var nomeIdx = store.createIndex("porNome", "titulo", {unique: true});
  var fabricanteIdx = store.createIndex("porFabricante", "fabricante");
  // Populando o banco com alguns produtos
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