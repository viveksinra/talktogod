import connectMongo from "../../../config/mongo";
import AllGods from "../../../models/Gods/AllGods"

// export async function GET(req,res) { 
//     const godsArray = [
//         {
//           godUserName: 'lordGanesha',
//           godName: 'Lord Ganesha',
//           profileImage: 'https://res.cloudinary.com/dncukhilq/image/upload/v1682191769/talktogod/godProfileImage/ganesha_uhvb1t.jpg',
//           position: 1
//         },
//         {
//           godUserName: 'lordShiva',
//           godName: 'Lord Shiva',
//           profileImage: 'https://res.cloudinary.com/dncukhilq/image/upload/v1682191770/talktogod/godProfileImage/shiva_ji81a2.avif',
//           position: 2
//         },
//         {
//           godUserName: 'lordKrishna',
//           godName: 'Lord Krishna',
//           profileImage: 'https://res.cloudinary.com/dncukhilq/image/upload/v1682191770/talktogod/godProfileImage/krishna_dqmchz.jpg',
//           position: 3
//         },
//         {
//           godUserName: 'lordRama',
//           godName: 'Lord Rama',
//           profileImage: 'https://res.cloudinary.com/dncukhilq/image/upload/v1682191770/talktogod/godProfileImage/ram_nmw6tf.jpg',
//           position: 4
//         },
//         {
//           godUserName: 'lordHanuman',
//           godName: 'Lord Hanuman',
//           profileImage: 'https://res.cloudinary.com/dncukhilq/image/upload/v1682191769/talktogod/godProfileImage/hanuman_bqszir.jpg',
//           position: 5
//         },
//         {
//           godUserName: 'maLakshmi',
//           godName: 'Goddess Lakshmi',
//           profileImage: 'https://res.cloudinary.com/dncukhilq/image/upload/v1682191770/talktogod/godProfileImage/laxmi_igvkfv.jpg',
//           position: 6
//         },
//         {
//           godUserName: 'maDurga',
//           godName: 'Goddess Durga',
//           profileImage: 'https://res.cloudinary.com/dncukhilq/image/upload/v1682191771/talktogod/godProfileImage/durga_xggc7w.jpg',
//           position: 7
//         },
//         {
//           godUserName: 'maSaraswati',
//           godName: 'Goddess Saraswati',
//           profileImage: 'https://res.cloudinary.com/dncukhilq/image/upload/v1682191770/talktogod/godProfileImage/swarswati_gjh6fm.jpg',
//           position: 8
//         },
//         {
//           godUserName: 'saintSaiBaba',
//           godName: 'Saint Sai Baba',
//           profileImage: 'https://res.cloudinary.com/dncukhilq/image/upload/v1682191770/talktogod/godProfileImage/saibaba_wuvigd.jpg',
//           position: 9
//         },
//         {
//           godUserName: 'jesusChrist',
//           godName: 'Jesus Christ',
//           profileImage: 'https://res.cloudinary.com/dncukhilq/image/upload/v1682191769/talktogod/godProfileImage/jesuss_zbqe2o.jpg',
//           position: 10
//         }
//       ];
  
//   return res.json(godsArray)
// //    return new Response(godsArray)
//   }
export default async function handler(req, res) {
 res.send("data")
  }

// saving all god
//   const saveGod = (godName,godUserName,profileImage,position) => {
//     let oneGodData = {
//         godName:godName,
//         godUserName: godUserName,
//         position:position,
//         profileImage:profileImage,
//     }


//     AllGods.findOne({godUserName:godUserName})
//     .then(data => {
//       if(!data){
//         new AllGods(oneGodData)
//         .save()
//         .then(
//        console.log("god saved succesfully")
//         )
//         .catch(err => console.log(err));
//       }else{
//         console.log("duplicate data")
//       }
//     })
//     .catch(err => console.log(err))
  
//   }
// saving all god
//   export async function GET(request) { 
//     await connectMongo();
//     const godsArray = [
//         {
//           godUserName: 'lordGanesha',
//           godName: 'Lord Ganesha',
//           profileImage: 'https://res.cloudinary.com/dncukhilq/image/upload/v1682191769/talktogod/godProfileImage/ganesha_uhvb1t.jpg',
//           position: 1
//         },
//         {
//           godUserName: 'lordShiva',
//           godName: 'Lord Shiva',
//           profileImage: 'https://res.cloudinary.com/dncukhilq/image/upload/v1682191770/talktogod/godProfileImage/shiva_ji81a2.avif',
//           position: 2
//         },
//         {
//           godUserName: 'lordKrishna',
//           godName: 'Lord Krishna',
//           profileImage: 'https://res.cloudinary.com/dncukhilq/image/upload/v1682191770/talktogod/godProfileImage/krishna_dqmchz.jpg',
//           position: 3
//         },
//         {
//           godUserName: 'lordRama',
//           godName: 'Lord Rama',
//           profileImage: 'https://res.cloudinary.com/dncukhilq/image/upload/v1682191770/talktogod/godProfileImage/ram_nmw6tf.jpg',
//           position: 4
//         },
//         {
//           godUserName: 'lordHanuman',
//           godName: 'Lord Hanuman',
//           profileImage: 'https://res.cloudinary.com/dncukhilq/image/upload/v1682191769/talktogod/godProfileImage/hanuman_bqszir.jpg',
//           position: 5
//         },
//         {
//           godUserName: 'maLakshmi',
//           godName: 'Goddess Lakshmi',
//           profileImage: 'https://res.cloudinary.com/dncukhilq/image/upload/v1682191770/talktogod/godProfileImage/laxmi_igvkfv.jpg',
//           position: 6
//         },
//         {
//           godUserName: 'maDurga',
//           godName: 'Goddess Durga',
//           profileImage: 'https://res.cloudinary.com/dncukhilq/image/upload/v1682191771/talktogod/godProfileImage/durga_xggc7w.jpg',
//           position: 7
//         },
//         {
//           godUserName: 'maSaraswati',
//           godName: 'Goddess Saraswati',
//           profileImage: 'https://res.cloudinary.com/dncukhilq/image/upload/v1682191770/talktogod/godProfileImage/swarswati_gjh6fm.jpg',
//           position: 8
//         },
//         {
//           godUserName: 'saintSaiBaba',
//           godName: 'Saint Sai Baba',
//           profileImage: 'https://res.cloudinary.com/dncukhilq/image/upload/v1682191770/talktogod/godProfileImage/saibaba_wuvigd.jpg',
//           position: 9
//         },
//         {
//           godUserName: 'jesusChrist',
//           godName: 'Jesus Christ',
//           profileImage: 'https://res.cloudinary.com/dncukhilq/image/upload/v1682191769/talktogod/godProfileImage/jesuss_zbqe2o.jpg',
//           position: 10
//         }
//       ];
      
      
// let x = 0
//       while(x <= godsArray.length){
//        let god =  godsArray[x]
//         saveGod(god.godName,god.godUserName,god.profileImage,god.position)
// x++
//       }
  
  
//    return new Response("All god saved")
//   }

// const godsArray = [
//     {
//         godUserName: 'lordGanesha',
//         godName: 'Lord Ganesha',
//         profileImage: 'https://res.cloudinary.com/dncukhilq/image/upload/v1682191769/talktogod/godProfileImage/ganesha_uhvb1t.jpg',
//         position: 1,
//         shortDescription: 'Talk to Lord Ganesha'
//     },
//     {
//         godUserName: 'lordShiva',
//         godName: 'Lord Shiva',
//         profileImage: 'https://res.cloudinary.com/dncukhilq/image/upload/v1682191770/talktogod/godProfileImage/shiva_ji81a2.avif',
//         position: 2,
//         shortDescription: 'Talk to Lord Shiva'
//     },
//     {
//         godUserName: 'lordKrishna',
//         godName: 'Lord Krishna',
//         profileImage: 'https://res.cloudinary.com/dncukhilq/image/upload/v1682191770/talktogod/godProfileImage/krishna_dqmchz.jpg',
//         position: 3,
//         shortDescription: 'Ask your question to Lord Krishna'
//     },
//     {
//         godUserName: 'lordRama',
//         godName: 'Lord Rama',
//         profileImage: 'https://res.cloudinary.com/dncukhilq/image/upload/v1682191770/talktogod/godProfileImage/ram_nmw6tf.jpg',
//         position: 4,
//         shortDescription: 'Talk to Lord Rama'
//     },
//     {
//         godUserName: 'lordHanuman',
//         godName: 'Lord Hanuman',
//         profileImage: 'https://res.cloudinary.com/dncukhilq/image/upload/v1682191769/talktogod/godProfileImage/hanuman_bqszir.jpg',
//         position: 5,
//         shortDescription: 'Talk to Lord Hanuman'
//     },
//     {
//         godUserName: 'maLakshmi',
//         godName: 'Goddess Lakshmi',
//         profileImage: 'https://res.cloudinary.com/dncukhilq/image/upload/v1682191770/talktogod/godProfileImage/laxmi_igvkfv.jpg',
//         position: 6,
//         shortDescription: 'Talk to Goddess Lakshmi'
//     },
//     {
//         godUserName: 'maDurga',
//         godName: 'Goddess Durga',
//         profileImage: 'https://res.cloudinary.com/dncukhilq/image/upload/v1682191771/talktogod/godProfileImage/durga_xggc7w.jpg',
//         position: 7,
//         shortDescription: 'Talk to Goddess Durga'
//     },
//     {
//         godUserName: 'maSaraswati',
//         godName: 'Goddess Saraswati',
//         profileImage: 'https://res.cloudinary.com/dncukhilq/image/upload/v1682191770/talktogod/godProfileImage/swarswati_gjh6fm.jpg',
//         position: 8,
//         shortDescription: 'Talk to Goddess Saraswati'
//     },
//     {
//         godUserName: 'saintSaiBaba',
//         godName: 'Saint Sai Baba',
//         profileImage: 'https://res.cloudinary.com/dncukhilq/image/upload/v1682191770/talktogod/godProfileImage/saibaba_wuvigd.jpg',
//         position: 9,
//         shortDescription: 'Talk to Saint Sai Baba'
//     },
//     {
//         godUserName: 'jesusChrist',
//         godName: 'Jesus Christ',
//         profileImage: 'https://res.cloudinary.com/dncukhilq/image/upload/v1682191769/talktogod/godProfileImage/jesuss_zbqe2o.jpg',
//         position: 10,
//         shortDescription: 'Talk to Saint Sai Baba'
//     }

//     ]
