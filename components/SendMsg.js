import React, { Component } from 'react'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
//  mutation {
const ADD_CHAT = gql`
  mutation AddChat($message: String!) {
    createChat(message: $message, userid: "123456") {
      id
      message
    }
  }
`

class SendMsg extends Component {
  state = {
    msg: '',
  }
  render = () => (
    <Container>
      <Mutation mutation={ADD_CHAT}>
        {(AddChat, { data }) => (
          <div>
            <form
              onSubmit={e => {
                e.preventDefault()
                AddChat({ variables: { message: this.state.msg } })
                this.setState({ msg: '' })
              }}
            >
              <input
                type="text"
                value={this.state.msg}
                onChange={e => this.setState({ msg: e.target.value })}
              />
              <button type="submit">send</button>
            </form>
          </div>
        )}
      </Mutation>
    </Container>
  )
  componentDidMount() {}
}

export default SendMsg

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
