import Image from 'next/image';
import Link from 'next/link';
import "@/components/Project_List_Item/Project_List_Item.css";

interface ProjectListItemProps {
  id: string;
}

export default function Project_List_Item({ id }: ProjectListItemProps) {
  return (
    <div>
      <div className="clear">
        <div className="item_container">
          <Link href={`/project?project_id=${id}`}>
            <div className="thumbnail_left">
              <Image
                src="/image/project1_thumb.png"
                width={300}
                height={300}
                alt="project image"
              />
              <div className="text_of_thumbnail">
                <div style={{ marginTop: '1rem' }}>
                  프로젝트 제목 {id}
                </div>
                <p style={{ margin: '1rem 0' }}>
                  프로젝트 설명 부분 어떤 프로젝트인지 간단하게 설명하는 부분이다
                </p>
              </div>
            </div>
            <Image
              className="thumbnail_right"
              src="/image/project1_img.png"
              width={800}
              height={500}
              alt="project image"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
