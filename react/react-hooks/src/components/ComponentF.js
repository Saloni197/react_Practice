import React from 'react';
import { ChannelContext, UserContext } from '../App';

function ComponentF(props) {
    return (
        <div>
        <UserContext.Consumer>
        {
            user => {
                return(
                    <ChannelContext.Consumer>
                    {
                        Channel=>{
                               return <div>User Context Value is:{user} . Channel is:{Channel}</div>
                                }
                    }
                    </ChannelContext.Consumer>
                )
            }
        }
        </UserContext.Consumer>
        </div>
    );
}

export default ComponentF;