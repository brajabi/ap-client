import withData from '../lib/apollo'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const LinkList = () => (
  <Query
    pollInterval={1500}
    query={gql`
      {
        allLinks {
          id
        }
      }
    `}
  >
    {({ loading, error, data, startPolling, stopPolling }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :(</p>

      return data.allLinks.map(({ id, url, description }) => (
        <div key={id}>
          <p>
            {`${id}: (${description})`}
            <a href={url}>Link</a>
          </p>
        </div>
      ))
    }}
  </Query>
)

export default withData(LinkList)
