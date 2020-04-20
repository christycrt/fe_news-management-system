import React from 'react'

import FormCreateNews from '../Component/CreateNewsPage/Form'
import ReviewNews from '../Component/CreateNewsPage/PreviewNews'

import ButtonBar from '../Component/CreateNewsPage/ButtonBar'

class CreateNewsPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Component: 1,
            News: {
                Title: "",
                Body: "",
                Image: [],
                NewsType: [],
                Expiredate: null,
                ExpiredateCheck: false,
                AllNewsTypes: [{type:"Sport", selected:false},{type:"Scholarship", selected: false}]
            },
        }
    }
    handleComponent = () => {
        if(this.state.Component === 1) {
            return(  
                <FormCreateNews Next={this.handleNext} News={this.state.News} handleFormText={this.handleFormText} handleCheckExpireDate={this.handleCheckExpireDate} handleDayChange={this.handleDayChange} handleImage={this.handleImage} handleDeleteImage={this.handleDeleteImage} handleSelectNewsType={this.handleSelectNewsType}/>
            )
        }else{
            return <ReviewNews News={this.state.News}/>
        }
    }
    handleFormText = async (e, name) => {
        let v = e.target.value
        await this.setState(prevState => ({
            News: {                   // object that we want to update
                ...prevState.News,    // keep all other key-value pairs
                [name]: v       // update the value of specific key
            }
        }))
    }
    handleCheckExpireDate = async() => {
        let check = !this.state.News.ExpiredateCheck
        await this.setState(prevState => ({
            News: {                   // object that we want to update
                ...prevState.News,    // keep all other key-value pairs
                ExpiredateCheck: check      // update the value of specific key
            }
        }))
    }
    handleDayChange = async(day) => {
        await this.setState(prevState => ({
            News: {                   // object that we want to update
                ...prevState.News,    // keep all other key-value pairs
                Expiredate: day      // update the value of specific key
            }
        }))
    }
    handleImage = async (e) => {
        let imgs = this.state.News.Image
        let files = e.target.files
        await Array.from(files).forEach(file => {
            imgs.push(file)
        })
        await this.setState(prevState => ({
            News: {                   // object that we want to update
                ...prevState.News,    // keep all other key-value pairs
                Image: imgs      // update the value of specific key
            }
        }))
    }
    handleDeleteImage = async (key) => {
        let imgs = this.state.News.Image
        imgs.splice(key, 1)
        await this.setState(prevState => ({
            News: {                   // object that we want to update
                ...prevState.News,    // keep all other key-value pairs
                Image: imgs      // update the value of specific key
            }
        }))
    }
    handleSelectNewsType = async(key) => {
        let allnewstype = this.state.News.AllNewsTypes
        allnewstype[key].selected = !allnewstype[key].selected
        await this.setState(prevState => ({
            News: {                   // object that we want to update
                ...prevState.News,    // keep all other key-value pairs
                AllNewsTypes: allnewstype      // update the value of specific key
            }
        }))
    }
    handleNext = async () => {
        await this.setState({Component:this.state.Component+1})
    }
    handlePrevious = async () => {
        await this.setState({Component:this.state.Component-1})
    }
    render() {
        return (
            <div className="pb-5">
                {this.handleComponent()}
                <ButtonBar Component={this.state.Component} Next={this.handleNext} Previous={this.handlePrevious}/>
            </div>
        )
    }
}

export default CreateNewsPage