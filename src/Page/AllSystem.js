import React from 'react'
import styled from 'styled-components'
import Navbar from '../Component/Navbar'
import { Link } from 'react-router-dom'
const SystemBox = styled.div`
    height: 150px;
    background-color:white;
    cursor:pointer;
    `
const Background = styled.div`
 min-height: 100vh;
    background: linear-gradient(
        to top,
        white 0%,
        white 60%,
        #050042 60%,
        #050042 100%
      );
`
class AllSystem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            systems: [
                {
                    name: "SIT News"
                },
                {
                    name: "NMS"
                },
                {
                    name: "Test Jaaa"
                },
            ]
        }
    }
    render() {
        return (
            <div>
                <Background>
                    <Navbar page="allsystem" />
                    <div className='container pt-5'>
                        <div className='col-10 mx-auto'>
                            <div className='col-12'>
                                <h3 className='text-light'>All systems</h3>
                                <div className='row'>
                                    <div className='col-4 p-2'>
                                        <SystemBox className='p-3 rounded shadow-sm'>
                                            +
                                            Add System
                            </SystemBox>
                                    </div>
                                    {this.state.systems.map((system) => {
                                        return (
                                            <div className='col-4 p-2'>
                                                <a href={`/${system.name}/home`}>
                                                    <SystemBox className='p-3 rounded shadow-sm'>
                                                        Add System
                                                </SystemBox>
                                                </a>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </Background>
            </div>
        )
    }
}

export default AllSystem