import React from 'react';
import templateHome from './template/home';
import '../resources/home.scss';

type Props = {
};
type State = {
  scroll: number;
};

export default class Home extends React.Component<Props, State> {
  constructor(p: Props) {
    super(p);
    this.state = { scroll: 0, }
  }

  render() {
    const template = new templateHome()
    return(
      template.output()
    );
  }
}