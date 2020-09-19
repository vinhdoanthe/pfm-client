import React from 'react';
import DefaultLayout from './defaultLayout';
import LeftNav from './LeftNav';
import PageContent from './PageContent';

const initialState = {}

class Page extends React.Component {

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  render() {
    return(
      <DefaultLayout>
        <LeftNav />
        <PageContent />
      </DefaultLayout>
    )
  }
}

export default Page;
