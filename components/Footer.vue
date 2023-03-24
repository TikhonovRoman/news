

<script>
</script>
<template>
  <div class="footer">
    <div class="footerCont">
      <div class="footer-a">
        <a href="#">item</a>
        <a href="#">item</a>
        <a href="#">item</a>
      </div>
      <div class="none">
        <a href="#">item</a>
        <a href="#">item</a>
        <a href="#">item</a>
      </div>
      <div class="none_footer">
        <p>item</p>
        <a href="#">item</a>
        <a href="#">item</a>
        <a href="#">item</a>
        <a href="#">item</a>
        <a href="#">item</a>
        <a href="#">item</a>
      </div>
      <div class="none_footer">
        <p>item</p>
        <a href="#">item</a>
        <a href="#">item</a>
        <a href="#">item</a>
        <a href="#">item</a>
        <a href="#">item</a>
      </div>
      <div class="none_footer">
        <p>item</p>
        <a href="#">item</a>
        <a href="#">item</a>
        <a href="#">item</a>
        <a href="#">item</a>
        <a href="#">item</a>
      </div>
      <div class="social">
        <a id="fb" href="#"></a>
        <a id="inst" href="#"></a>
        <a id="yt" href="#"></a>
      </div>
    </div>
    <hr />
    <div>
      <p class="bottom">Copyright &reg; Company 2018-2022</p>
    </div>
  </div>
</template>
<style scoped>
a {
  display: block;
  text-decoration: none;
  color: rgb(156, 143, 143);
  margin-bottom: 10px;
}
.footer-a a {
  color: rgb(238, 231, 231);
}

.footerCont {
  display: inline-flex;
  margin: 20px 30px;
  margin-top: 0;
}
.footerCont div {
  margin-right: 50px;
}
.footer {
  width: 100vw;
  margin: 0 auto;
  margin-top: 100px;
  background: rgb(62, 63, 65);
  padding: 40px;
}
p {
  margin-bottom: 10px;
  color: rgb(238, 231, 231);
}

.social a {
  display: inline-block;
  width: 30px;
  height: 30px;
  margin: 10px;
}
.social {
  padding-top: 0;
}
.bottom {
  text-align: center;
}
#fb {
  background: url(@/assets/img/fb_gray.png) center/cover;
}
#inst {
  background: url(@/assets/img/insta_gray.png) center/cover;
}
#yt {
  background: url(@/assets/img/youtube_gray.png) center/cover;
}
#fb:hover {
  background: url(@/assets/img/fb.png) center/cover;
}
#inst:hover {
  background: url(@/assets/img/insta.png) center/cover;
}
#yt:hover {
  background: url(@/assets/img/youtube.png) center/cover;
}
</style>