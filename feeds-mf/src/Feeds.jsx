import React from "react";
import ReactDOM from "react-dom";
import {Card, CardTitle, CardBody, CardFooter} from '@patternfly/react-core';
import { Icon } from '@patternfly/react-core';
import { ShareSquareIcon } from '@patternfly/react-icons';
import "@patternfly/react-core/dist/styles/base.css";

import "./index.css";

const Feeds = () => {
  return (
    <div>
      <Card style={{ padding: '16px'}}>
        <CardTitle style={{ color: "red"}}>Preeti @React Nexus</CardTitle>
        <CardBody>Excited to meet react community at the conference!</CardBody>
        <CardFooter>
          <Icon>
            <ShareSquareIcon />
          </Icon>
        </CardFooter>
      </Card>
    
    
      <Card style={{ padding: '16px'}}>
        <CardTitle style={{ color: "red"}}>Sid @React Nexus</CardTitle>
        <CardBody>How excited are you for React Nexus?</CardBody>
        <CardFooter>
          <Icon>
            <ShareSquareIcon />
          </Icon>
        </CardFooter>
      </Card>

      <Card style={{ padding: '16px'}}>
        <CardTitle style={{ color: "red"}}>Neha @React Nexus</CardTitle>
        <CardBody>Couldn't come for the conference, but still watching virtually</CardBody>
        <CardFooter>
          <Icon>
            <ShareSquareIcon />
          </Icon>
        </CardFooter>
      </Card>
    </div>
  );
};


ReactDOM.render(<Feeds />, document.getElementById("app"));


export default Feeds;
