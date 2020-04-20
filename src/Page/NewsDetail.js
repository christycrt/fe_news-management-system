import React from 'react'
import styled from 'styled-components'

const ImageBox = styled.div`
    height: 200px;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

class NewsDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            News: {
                Title: "asdasdasdasdasd",
                Body: "fsdfdsfsdfsdfsfsfs",
                Author: "dfjsklfjljsdlf",
                PostDate: "new Date()",
                Images: [],
            },
        }
    }
    componentDidMount() {
        if (this.props.News !== undefined) {
            this.setState({
                News: {
                    Title: this.props.News.Title,
                    Body: this.props.News.Body,
                    Author: "Unknow",
                    PostDate: "dfdsfds",
                    Images: this.props.News.Image
                }
            })
        } else {

        }
    }
    render() {
        return (
            <div className='container'>
                <h3>{this.state.News.Title}</h3>
                <pre style={{whiteSpace:"pre-wrap",wordBreak: "break-word"}}>{this.state.News.Body}</pre>
                <div className='d-flex justify-content-between'>
                    <p>Written by {this.state.News.Author}</p>
                    <p>{this.state.News.PostDate}</p>
                </div>
                <div className='col-12'>
                    <div className='row'>
                        {this.state.News.Images.map((image) => {
                            return (
                                <ImageBox className='col-12 col-sm-4 p-1 mb-3'>
                                    <Image src={URL.createObjectURL(image)} />
                                </ImageBox>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsDetail