import {postgraphile} from 'postgraphile'
import {companyPlugin} from  './plugins/companyPlugin'
import {agentPlugin} from './plugins/agent_plugin'

export const postg=postgraphile(
     "postgresql://postgres:ASDF12345@a@localhost:5432/mydb",
      "my_local",
    {
    "dynamicJson": true,
    "watchPg": true,
    "graphiql": true,
    "enhanceGraphiql": true,
    "appendPlugins":[companyPlugin,agentPlugin],
    "graphiqlRoute":"/api"
    }
  )
  