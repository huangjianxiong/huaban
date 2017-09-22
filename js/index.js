window.onload=function(){ 
	let canvas=document.querySelector('canvas');
	let ctx=canvas.getContext('2d')
	let mask=document.querySelector('.mask')
	let eraser=document.querySelector('.eraser')
	let line=document.querySelector('.icon-line')
	let pencil=document.querySelector('.icon-qianbi')
	let circle=document.querySelector('.icon-circle')
	let rectangle=document.querySelector('.icon-changfangxing')
	let polygon=document.querySelector('.icon-iconfontwubianxing')
	let star=document.querySelector('.icon-kongwujiaoxing')
	let word=document.querySelector('.icon-wenzi')
	let roundrect=document.querySelector('.icon-yuanjiaojuxing')
 
	let fil=document.querySelector('.icon-youqi')
	let fillIn=document.querySelector('.fillIn')
	let strok=document.querySelector('.icon-miaobian')
	let strokeIn=document.querySelector('.strokeIn')

	let clip=document.querySelector('.icon-caijian')
	let clear=document.querySelector('.icon-xiangpica')
    
	let cancel=document.querySelector('.icon-chexiao')
	let create=document.querySelector('.icon-xinjian')
	let save=document.querySelector('.icon-baocun')
	// let xiazai=document.querySelector('icon-xiazai')
	let clipBtn=document.querySelector('.clip')
	
	let img=document.querySelector('img')
	let palette=new Palette(canvas,ctx,mask);
///////////////////////////功能
    //新建
    create.onclick=function () {
        palette.create();
    };
    //撤销
    document.body.onkeydown=function (e) {
        if(e.ctrlKey&&e.keyCode==90){
           palette.cancel();
        }else if(e.ctrlKey&&e.keyCode==83){
            palette.save(); //保存
        }
    };
    cancel.onclick=function () {
        palette.cancel();
    };
    //保存
    save.onclick=function () {
        save.href=canvas.toDataURL('image/png')
        save.download='a.png'
        // palette.save(img);
    };
    // //下载
    // download.onclick=function () {
    //     palette.download();
    // };
////////////////////////////图形工具

//实线
	line.onclick=function () {
        palette.line();
    };
//铅笔
	pencil.onclick=function () {
        palette.pencil();
    };
//圆
    circle.onclick=function () {
        palette.circle();
    };



//矩形
    rectangle.onclick=function () {
        palette.rectangle();
    };

//多边形
    polygon.onclick=function () {
        let n=prompt('您想绘制几边形呢？','5');
        palette.polygon(n);
    };
//多角形
    star.onclick=function () {
        let n=prompt('您想绘制几角形呢？','5');
        palette.star(n);
    };
//文字
    word.onclick=function () {
        palette.word();
    };
//圆角矩形
    roundrect.onclick=function () {
        palette.roundrect(10);
    };
//橡皮擦
    clear.onclick=function () {
        let w=prompt('您需要多大的橡皮呢？','10');
        palette.clear(w,w,eraser);
    };

//描边
	strok.onclick=function () {
        palette.type='stroke';
    };
    strokeIn.onchange=function () {
        console.log(palette.strokeStyle=`${this.value}`);
    };
//填充
	fil.onclick=function () {
        palette.type='fill';
    };
    fillIn.onchange=function () {
        console.log(palette.fillStyle=`${this.value}`);
    };
//剪切
	clip.onclick=function () {
        palette.clip(clipBtn);
    };  


}