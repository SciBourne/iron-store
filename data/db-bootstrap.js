print("\n\nCreate test database: iron_store\n")

const db = connect("mongodb://localhost/iron_store")
const collectionNames = fs.readdirSync("data/products")

var collections = []




print("Source data:")


collectionNames.forEach(
  (name, i) => {
    collections.push(fs.readFileSync(`data/products/${name}`, "utf-8"))
    print(`(${i+1}) data/products/${name}`)
  }
)


collections.forEach(
  (coll) => {
    db.products.insertMany(EJSON.deserialize(JSON.parse(coll)))
  }
)


print("\n[ ok ]: The bootstrap of the test database is complete\n\n")
