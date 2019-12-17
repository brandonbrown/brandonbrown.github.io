import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
// Import typefaces
import ReactHtmlParser from 'react-html-parser';

export default class Newsletter extends React.Component {
  state = {
    name: null,
    email: null,
    message: null,
  }

  _handleChange = e => {
    this.setState({
      [`${e.target.name}`]: e.target.value,
    })
  }
  // Since `addToMailchimp` returns a promise, you
  // can handle the response in two different ways:

  // Note that you need to send an email & optionally, listFields
  // these values can be pulled from React state, form fields,
  // or wherever.  (Personally, I recommend storing in state).

  // 1. via `.then`
  // _handleSubmit = e => {
  //   e.preventDefault();
  //   addToMailchimp(email, listFields)
  //   .then(data => {
  //
  //     console.log(data)
  //   })
  //   .catch(() => {
  //     // unnecessary because Mailchimp only ever
  //     // returns a 200 status code
  //     // see below for how to handle errors
  //   })
  // }

  // 2. via `async/await`
  _handleSubmit = e => {
    e.preventDefault();
    addToMailchimp(this.state.email, {name: this.state.name})
    .then(({msg, result}) => {
      console.log('msg', `${result}: ${msg}`);
      if (result !== 'success') {
        throw msg;
      }

      // alert(msg);
      this.setState({
        message: msg
      });
    })
    .catch(err => {
      console.log('err', err);
      // alert(err);
      this.setState({
        message: err
      });
    });
  }

  render () {
    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <input type="email" onChange={this._handleChange} placeholder="email" name="email" />
          <input type="submit" className="button"/>
        </form>
        { ReactHtmlParser (this.state.message) }
      </div>
    )
  }
}
