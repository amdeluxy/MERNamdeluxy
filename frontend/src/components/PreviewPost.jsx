



const PreviewPost = ({post}) => {
    const { title, _id, text } = post

  return (
    <>
    <div>{title}</div>
    <div>{text}</div>
    <div>{_id}</div>
    </>
    
  )
}

export default PreviewPost