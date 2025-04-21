import Image from 'next/image'
import React from 'react'
import "@/components/Project_List_Item/Project_List_Item.css"
import Link from 'next/link'

export default function Project_List_Item({ id }) {

  let project_id = id;

  return (
    <div >
      <div className="clear">
        <div className='item_container'>

          <Link href={`/project?project_id=${project_id}`}>

          <div className="thumbnail_left">
            <Image src={"/image/project1_thumb.png"} width={300} height={300} alt="project image"></Image>
            <div className="text_of_thumbnail">
            <br></br>
              <div>프로젝트 제목 {project_id}</div>
              <br></br>
              <p>프로젝트 설명 부분 어떤 프로젝트인지 간단하게 설명하는 부분이다</p>
            </div>
          </div>
          
          <Image className="thumbnail_right" src={"/image/project1_img.png"} width={800} height={500} alt="project image"></Image>
          </Link>
         

        </div>
      </div>

    </div>
  )
}
