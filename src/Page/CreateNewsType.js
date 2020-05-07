import React from "react";
import styled from 'styled-components';
import { Input } from 'antd';


const Background = styled.div`
 min-height: 100vh;
 Background-color: white;
`
const Box = styled.div`
    height: 145px;
    border: 1px solid #A6A6A6;
    border-radius: 10px;
    cursor: pointer;
    text-align: center;
    padding-top: 60px;
`
const BoxAddNewsType = styled.div`
    height: 145px;
    border: 1px solid #A6A6A6;
    border-radius: 10px;
    cursor: pointer;
    text-align: center;
`
const ButtonAddNewsType = styled.div`
    background-color: #050042;
    border: none;
    border-radius: 10px;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    width: 77px;
    margin-top: 10px;
`

class CreateNewsTypePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newstype: [
                {
                    name:"Scholarship",
                },
                {
                    name:"Activity"
                }
            ],
            NewsType:""
        }
    }

    SetNewsType = (e) => {
        console.log(e.target.value)
        this.setState({
            NewsType:e.target.value
        })
    }
    AddNewsType = () => {
        let nameType = {
            name: this.state.NewsType
        }
        let newstype = this.state.newstype
        newstype.push(nameType)
        this.setState({
            newstype:newstype,
            NewsType:""
        })
    }
    render() {
        return (
            <Background className="pt-5">
                <div className="container pt-5">
                    <h3>Create news type</h3>
                    <div className="icons-list">
                    </div>,
                    <div className="col-12">
                        <div className="row">
                            <div className="col-3 p-2">
                                <BoxAddNewsType className="shadow-sm pt-3 px-3">
                                    <p>Add target group</p>
                                    <Input onChange={(e) => this.SetNewsType(e)} value={this.state.NewsType} placeholder="Enter type name" /><br/>
                                    <ButtonAddNewsType onClick={this.AddNewsType} type="button">Add</ButtonAddNewsType>
                                </BoxAddNewsType>
                            </div>
                            {this.state.newstype.map((newstype) => {
                                return (
                                    <div className="col-3 p-2">
                                        <Box className="shadow-sm">
                                            {newstype.name}
                                        </Box>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Background>
        )
    }
}

export default CreateNewsTypePage;
