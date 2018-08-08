import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const GetLinksList = () => (
  <Query
    pollInterval={1000}
    query={gql`
      {
        allChats {
          id
          message
          createdAt
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :(</p>

      return data.allChats.map(({ id, message, createdAt }) => (
        <div key={id}>
          <p>{`${id}: (${message})`}</p>
          <hr />
        </div>
      ))
    }}
  </Query>
)

const LinksList = () => (
  <div>
    <GetLinksList />
  </div>
)
export default LinksList
