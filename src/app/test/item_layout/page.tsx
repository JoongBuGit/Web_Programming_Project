'use client'

import ImageUpload from '@/components/ImageUpload'
import Image from 'next/image'
import React from 'react'
import "@/components/Project_List_Item/Project_List_Item.css"


export default function page() {
    return (
        <div>
            <div >
                <div className="clear">
                    <div>

                        <div className="thumbnail_left">
                            <ImageUpload type={"thumbnail1"} />
                            <div className="text_of_thumbnail">
                                <input className='bg-slate-300' type='text' placeholder='Title'></input>
                                <input id='description' className='bg-slate-300' type='textarea' placeholder='description'></input>
                            </div>
                        </div>

                        <ImageUpload type={"thumbnail2"} />


                    </div>
                </div>
            </div>
        </div>
    )
}
