import { useRouter } from "next/router"

export default function Posts() {
    const router = useRouter();
    return (
      <h1>
        Post{router.query.id}
      </h1>
      
    )
  }
  