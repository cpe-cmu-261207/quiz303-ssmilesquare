export type CommentType = {
  username: string;
  userImagePath: string;
  commentText: string;
  likeNum: number;
  replies: CommentType[]
}

export const comments: CommentType[] = [
  {
    username: 'มายมิ้นเพื่อนดีเด่น',
    userImagePath: '/profileImages/mindmint.jpg',
    commentText: 'ยากจริงเพื่อนรัก',
    likeNum: 99,
    replies: [
      {
        username: 'VALORAN',
        userImagePath: '/profileImages/valorant.jpg',
        commentText: 'มาเล่นเกมกันดีกว่าครับ',
        likeNum: 0,
        replies: []
      },
      {
        username: 'แมวตัวหนึ่ง',
        userImagePath: '/profileImages/popcat.png',
        commentText: 'บะลั่กบะลั่กอุ่กอุ่ก',
        likeNum: 2,
        replies: []
      }
    ]
  },
  {
    username: 'P-Arm',
    userImagePath: '/profileImages/handsome.jpg',
    commentText: 'แค่นี้เอง ชิวๆป่าว',
    likeNum: 207,
    replies: []
  }
]

