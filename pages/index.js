import styled from 'styled-components'

import SendMsg from '../components/SendMsg'
import LinksList from '../components/LinksList'

export default props => (
  <Container>
    <SendMsg />
    <LinksList />
  </Container>
)

const Container = styled.div`
  width: 800px;
  height: 85vh;
  background: #eee;
  box-shadow: 0 0 4px #eee;
  padding: 20px;
  margin: 10px auto;
`
