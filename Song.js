/**
 * Created by 周东宜 on 2017/3/12.
 */
var Song=function(){
    var songs=[];
    var songsName=[];


//        示例曲目小星星
    var littlestar=[
        [224,8,8],
        [224,8,8],
        [228,8,8],
        [228,8,8],
        [229,8,8],
        [229,8,8],
        [228,16,16],
        [227,8,8],
        [227,8,8],
        [226,8,8],
        [226,8,8],
        [225,8,8],
        [225,8,8],
        [224,16,16],
        [228,8,8],
        [228,8,8],
        [227,8,8],
        [227,8,8],
        [226,8,8],
        [226,8,8],
        [225,16,16],
        [228,8,8],
        [228,8,8],
        [227,8,8],
        [227,8,8],
        [226,8,8],
        [226,8,8],
        [225,16,16],
        [224,8,8],
        [224,8,8],
        [228,8,8],
        [228,8,8],
        [229,8,8],
        [229,8,8],
        [228,16,16],
        [227,8,8],
        [227,8,8],
        [226,8,8],
        [226,8,8],
        [225,8,8],
        [225,8,8],
        [224,16,16],
    ]
    songs[0]=new Array();
    songs[0].push(littlestar)
    songs.push(littlestar);
    songsName.push('littlestar')
//        示例歌曲唐宋元明清
    var tangsongyuanmingqing=[
        [233,8,8],
        [233,8,8],
        [231,8,8],
        [232,8,8],
        [235,8,8],
        [233,4,4],
        [232,4,4],
        [231,4,4],
        [229,4,4],
        [231,40,40],
        [232,4,4],
        [233,8,8],
        [228,4,4],
        [229,4,4],
        [231,16,16],
        [233,8,8],
        [231,8,8],
        [231,8,8],
        [229,8,8],
        [232,8,8],
        [231,4,4],
        [231,36,136],
        [226,4,4],
        [228,4,4],
        [229,8,8],
        [231,8,8],
        [232,4,4],
        [232,4,4],
        [232,4,4],
        [231,4,4],
        [231,8,8],
        [231,16,16],
        [226,4,4],
        [228,4,4],
        [229,8,8],
        [231,8,8],
        [229,4,4],
        [228,4,4],
        [228,8,8],
        [226,8,8],
        [226,12,12],
        [224,4,4],
        [225,8,8],
        [226,8,8],
        [228,16,16],
        [229,8,8],
        [228,4,4],
        [226,4,4],
        [225,4,4],
        [224,4,4],
        [224,8,8],
        [225,16,16],
        [226,8,8],
        [226,8,8],
        [226,4,4],
        [225,4,4],
        [225,4,4],
        [225,36,36],


        [226,4,4],
        [228,4,4],
        [229,8,8],
        [231,8,8],
        [232,4,4],
        [233,4,4],
        [232,4,4],
        [231,4,4],
        [231,8,8],
        [231,16,16],
        [226,4,4],
        [228,4,4],
        [229,8,8],
        [231,8,8],
        [229,4,4],
        [228,4,4],
        [228,8,8],
        [226,8,8],
        [226,16,24],
        [228,4,4],
        [229,4,4],
        [231,8,8],
        [232,8,8],
        [233,12,12],
        [229,4,4],
        [229,8,8],
        [233,8,8],
        [231,8,8],
        [232,8,8],
        [233,8,8],
        [234,8,8],
        [233,8,8],
        [232,4,4],
        [232,4,12],
        [228,8,8],



        [233,8,8],
        [233,8,8],
        [233,4,4],
        [232,4,4],
        [232,8,8],
        [233,8,8],
        [233,8,8],
        [233,4,4],
        [232,4,4],
        [232,8,8],
        [233,4,4],
        [235,4,4],
        [233,4,4],
        [232,4,4],
        [231,4,4],
        [229,4,4],
        [229,8,8],
        [231,16,16],
        [233,8,8],
        [233,8,8],
        [232,8,8],
        [231,4,4],
        [229,4,4],
        [228,4,4],
        [226,4,4],
        [226,8,8],
        [228,16,16],
        [233,8,8],
        [231,8,8],
        [232,12,12],
        [231,4,4],
        [231,16,16],
        [232,32,32],



        [233,8,8],
        [233,8,8],
        [233,4,4],
        [232,4,4],
        [232,8,8],
        [233,8,8],
        [233,8,8],
        [233,4,4],
        [232,4,4],
        [232,8,8],
        [233,4,4],
        [235,4,4],
        [233,4,4],
        [232,4,4],
        [231,4,4],
        [229,4,4],
        [229,8,8],
        [231,16,16],
        [233,8,8],
        [231,8,8],
        [232,8,8],
        [231,4,4],
        [229,4,4],
        [228,4,4],
        [226,4,4],
        [226,8,8],
        [228,16,16],
        [228,8,8],
        [229,8,8],
        [231,16,24],
        [232,8,8],
        [233,12,12],
        [232,4,4],
        [232,12,12],
        [231,4,4],
        [231,48,64]

    ];
    songs.push(tangsongyuanmingqing)
    songsName.push('tangsongyuanmingqing')
//        示例歌曲唐宋元明清
    var tangsongyuanmingqing1=[
        [233,8,8],
        [233,8,8],
        [231,8,8],
        [232,8,8],
        [235,8,8],
        [233,4,4],
        [232,4,4],
        [231,4,4],
        [229,4,4],
        [231,40,40],
        [232,4,4],
        [233,8,8],
        [228,4,4],
        [229,4,4],
        [231,16,16],
        [233,8,8],
        [231,8,8],
        [231,8,8],
        [229,8,8],
        [232,8,8],
        [231,4,4],
        [231,36,136],
        [226,4,4],
        [228,4,4],
        [229,8,8],
        [231,8,8],
        [232,4,4],
        [232,4,4],
        [232,8,8],
        [231,8,8],
        [231,16,16],
        [226,4,4],
        [228,4,4],
        [229,8,8],
        [231,8,8],
        [229,4,4],
        [228,4,4],
        [228,8,8],
        [226,8,8],
        [226,12,12],
        [224,4,4],
        [225,8,8],
        [226,8,8],
        [228,16,16],
        [229,8,8],
        [228,4,4],
        [226,4,4],
        [225,8,8],
        [224,8,8],
        [225,16,16],
        [226,8,8],
        [226,8,8],
        [226,8,8],
        [225,4,4],
        [225,36,36],


        [226,4,4],
        [228,4,4],
        [229,8,8],
        [231,8,8],
        [232,4,4],
        [233,4,4],
        [232,8,8],
        [231,8,8],
        [231,16,16],
        [226,4,4],
        [228,4,4],
        [229,8,8],
        [231,8,8],
        [229,4,4],
        [228,4,4],
        [228,8,8],
        [226,8,8],
        [226,16,24],
        [228,4,4],
        [229,4,4],
        [231,8,8],
        [232,8,8],
        [233,12,12],
        [229,12,12],
        [233,8,8],
        [231,8,8],
        [232,8,8],
        [233,8,8],
        [234,8,8],
        [233,12,12],
        [232,4,12],
        [228,8,8],



        [233,8,8],
        [233,8,8],
        [233,8,8],
        [232,8,8],
        [233,8,8],
        [233,8,8],
        [233,8,8],
        [232,8,8],
        [233,4,4],
        [235,4,4],
        [233,4,4],
        [232,4,4],
        [231,4,4],
        [229,12,12],
        [231,16,16],
        [233,8,8],
        [233,8,8],
        [232,8,8],
        [231,4,4],
        [229,4,4],
        [228,8,8],
        [226,8,8],
        [228,16,16],
        [233,8,8],
        [231,8,8],
        [232,12,12],
        [231,20,20],
        [232,32,32],



        [233,8,8],
        [233,8,8],
        [233,8,8],
        [232,8,8],
        [233,8,8],
        [233,8,8],
        [233,8,8],
        [232,8,8],
        [233,4,4],
        [235,4,4],
        [233,4,4],
        [232,4,4],
        [231,8,8],
        [229,8,8],
        [231,16,16],
        [233,8,8],
        [231,8,8],
        [232,8,8],
        [231,4,4],
        [229,4,4],
        [228,8,8],
        [226,8,8],
        [228,16,16],
        [228,8,8],
        [229,8,8],
        [231,16,24],
        [232,8,8],
        [233,12,12],
        [232,4,4],
        [232,12,12],
        [231,4,4],
        [231,48,64]

    ];
    songs.push(tangsongyuanmingqing1);
    songsName.push('tangsongyuanmingqing1')
}
Song.prototype.constructor=Song();