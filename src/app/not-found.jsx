import Link from "next/link"

const NotFound = () => {
  return (
    <>
    <h2>Not Found</h2>
    <p>Sorry, the page you are looking for does not exist.</p>
    <button>
        <Link href="/">Back Home</Link>
    </button>
    </>
  )
}

export default NotFound