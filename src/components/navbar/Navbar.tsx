import NextLink from "next/link";

export const Navbar = () => {
  return (
    <div>
      <div>
        <div>
          <h1>
            <NextLink href='/' className='cursor-pointer'>
              Mock names
            </NextLink>
          </h1>
        </div>
      </div>
    </div>
  )
}