import Image from 'next/image';
import ODNS from '../images/rearrange_it_meme.jpg'

export default function Page() {
    return (
      <>
        <h1>Home</h1>
        <div>
          <Image 
          src={ODNS} 
          alt="meme" 
          quality={100} 
          placeholder="blur"
          style={{objectFit: "contain"}}
          />
        </div>
      </>
    )
  }