import { Model, Server } from 'miragejs'

export function makeServer({ environment = "development" } = {}) {
  console.log('Starting Mirage Server')
  let server = new Server({
    environment,

    models: {
      emp: Model,
    },

    seeds(server) {
      server.create("emp", { name: "Ram" })
      server.create("emp", { name: "Sham" })
    },

    routes() {

      this.namespace = "api"

      this.get("/emps", schema => {
        return schema.emps.all()
      })

      this.post("/emp", (schema, request) => {
        console.log('POST request')
        let attr = request.requestBody;
        return server.create("emp", { name: attr })
        //console.log(attrs)
        // debugger
      })

    },

  })

  return server
}