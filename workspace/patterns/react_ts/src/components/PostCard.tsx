import { createContext, ReactNode, useContext } from "react";

type Post = {
    id: number,
    title: string,
    content: string,
    user: {
        id: number,
        name: string
    };
};

type PostCardProps = {
    post: Post,
    children: ReactNode
}

type PostCardContextType = {
    post: Post
}

let PostCardContext = createContext<PostCardContextType | undefined>(undefined);

function usePostCardContext() {
    let context = useContext(PostCardContext);
    if(!context) {
        throw new Error('PostCardContext can be used only within Provider')
    }
    return context;
}
export default function PostCard({ post, children }: PostCardProps) {
    return (
        <PostCardContext.Provider value={{post}}>
                   <div className='flex w-[300px] flex-row gap-2 rounded-md'>
            {children}
        </div>
        </PostCardContext.Provider>
     
    )
}

PostCard.Title = function PostCardTitle() {
    // let context = useContext(PostCardContext);
    let context = usePostCardContext();
    return <h2 className='text-lg font-semibold'>{context.post.title}</h2>
}

PostCard.Profile = function PostCardProfile() {
    // let {post} = useContext(PostCardContext);
     let {post} = usePostCardContext();
     return (<p className='text-sm text-neutral-400'>
        {post.user.name}
    </p>)
}

PostCard.Buttons = function PostCardButtons() {
    return <div className='flex flex-row gap-2'>
        <button>Read more</button>
        <button>Comments</button>
    </div>
}