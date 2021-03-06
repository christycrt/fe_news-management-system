import React from 'react'
import styled from 'styled-components'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

const UploadImage = styled.input`
    position: absolute;
    font-size: 50px;
    opacity: 0;
    right: 0;
    top: 0;
    cursor:pointer;
`
const ButtonUpload = styled.div`
    position: relative;
    overflow: hidden;
    height: 100px;
    padding-top: 25px;
    cursor:pointer;
`

const SlideImage = styled.div`
    overflow: auto;
    white-space: nowrap;
`

const ImageBox = styled.div`
    position: relative;
    height: 100px;
`
const Image = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
`
const ImageDeleteBox = styled.div`
    color: white;
    position: absolute;
    cursor:pointer;
    z-index: 2;
    width: 100%;
    height: 100px;
    opacity: 0;
    padding-top: 30px;
    &:hover {
        background-color:rgba(0,0,0,0.8);
        opacity: 1;
    }
`
const NewsTypeBox = styled.div`
    border : ${props => props.select ? "1px solid rgba(0,0,0,0.05)" : "0px solid gray"};
    background-color: ${props => props.select ? "rgba(0,0,0,0.05)" : "none"};
    border-radius: 20px;
    cursor: pointer;
`
export default function FormCreateNews(props) {
    return (
        <div className='container'>
            <div className='pt-3'>
                <p className='text-center'>Create news</p>
                <form onSubmit={props.Next}>
                    <input required type="text" className="form-control mb-4" value={props.News.Title} onChange={(e) => props.handleFormText(e, "Title")} placeholder="Title" />
                    <textarea required className="form-control mb-4" value={props.News.Body} onChange={(e) => props.handleFormText(e, "Body")} placeholder="Body" rows="10" />
                    <div class="form-check mb-4">
                        <input class="form-check-input" onChange={props.handleCheckExpireDate} type="checkbox"/>
                        <label class="form-check-label mr-4">
                            Expire Date
                        </label>
                        <DayPickerInput style={{zIndex:3, position:"absolute"}}  component={(p) => <input {...p} disabled={props.News.ExpiredateCheck?"":"disabled"}/>} onDayChange={props.handleDayChange} />
                    </div>
                    <div className='col-12 mb-4'>
                        <div className='row'>
                            <ButtonUpload className="file border rounded text-center col-4 col-sm-3">
                                +<br />Image
							        <UploadImage type="file" multiple accept=".jpg,.png" onChange={props.handleImage} />
                            </ButtonUpload>
                            <SlideImage className="col-12 col-sm mt-3 mt-sm-0 ml-0 ml-sm-2 p-0">
                                {props.News.Image.map((image, key) => {
                                    return (
                                        <ImageBox id={key} className="col-4 col-sm-3 p-0 d-inline-block">
                                            <Image src={URL.createObjectURL(image)} />
                                            <ImageDeleteBox onClick={() => props.handleDeleteImage(key)} className="text-center">Delete<br />{image.name}</ImageDeleteBox>
                                        </ImageBox>
                                    )
                                })}
                            </SlideImage>
                        </div>
                    </div>
                    <div className="col-12 mb-5">
                        <p>Select News Types</p>
                        <div className='row'>
                            {props.News.AllNewsTypes.map((type, key) => {
                                return (
                                    <NewsTypeBox select={type.selected} onClick={() => props.handleSelectNewsType(key)} className='shadow-sm px-3 py-2 mr-3' id={key}>
                                        {type.type}
                                    </NewsTypeBox>
                                )
                            })}
                        </div>
                    </div>
                    <button className='btn btn-success float-right mb-5' type="submit">Preview</button>
                </form>
            </div>
        </div>
    )
}

