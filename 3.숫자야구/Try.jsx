import React, { PureComponent, memo, useState} from "react";

// class Try extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       result: this.props.result,
//       try: this.props.try
//     }
//   }
//   state = {
//     result: this.props.result,
//     try: this.props.try
//   };
//
//   render() {
//     const { tryInfo } = this.props;
//     return (
//       <li>
//         <div>{tryInfo.try}</div>
//         <div>{tryInfo.result}</div>
//       </li>
//     )
//   }
// }

const Try = memo(({tryInfo}) => {
    return (
        <li>
            <div>{tryInfo.try}</div>
            <div>{tryInfo.result}</div>
        </li>
    )
});
Try.displayName = 'Try';

export default Try;