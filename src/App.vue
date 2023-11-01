<template>
  <div>
    <div class="head">
      <div class="container">
        <div class="logo">
          <img src="@/assets/images/logotip.svg" alt="">
        </div>
        <div class="title">{{$t('title')}}</div>
        <div class="lang">
          <button @click="e18n.locale.value = 'ru'" :class="`left_btn ${$t('lang') == 'ru' ? 'active' : ''}`">RU</button>
          <button @click="e18n.locale.value = 'en'" :class="`right_btn ${$t('lang') == 'en' ? 'active' : ''}`">EN</button>
        </div>
      </div>
    </div>

    <div class="wrapper" id="dropzone">
      <div class="dropzone_shadow"></div>
      <div class="container">
        <div class="main">
          <div class="loader fonly">
            <div class="utext tfonly">
              <b v-html="$t('drop_file')"></b>
            </div>
            <div class="bg">
              <div class="arrow"></div>
              <div class="dot1"></div>
              <div class="dot2"></div>
              <div class="dot3"></div>
              <label id="upload_container" for="upload_file">
                <input type="file" id="upload_file" @change="uploadFile">
                <div class="logo" id="browse_btn_x"></div>
              </label>
            </div>
          </div>
          <div id="filelist" :class="!files.length ? 'hidden' : ''">
            <div class="info">
              <a href="/" class="exit"></a>
              <div class="filestats">
                <div class="fileCount">{{files.length}}</div> 
                <span>{{$t('files')}}</span>
                <div class="fileSize">{{filesSize}}</div>
                {{$t('total_size')}}
              </div>
              <div class="time">
                <div class="counter">00:00:00</div>
                <span v-html="$t('upload_file')"></span>
              </div>
            </div>
            <div class="expand">more</div>
            <div class="files" id="upfiles">
              <ul>
                <li v-for="(item, i) in files" :key="i">
                  <div class="icon">
                    <button class="close" @click="files.splice(i, 1)">
                      <span>&times;</span>
                    </button>
                    <div class="type">{{item.name.match(/\.(\w+)$/)[1]}}</div>
                    <span>{{formatSize(item.size)}}</span>
                  </div>
                  {{item.name}}
                </li>
              </ul>
            </div>
            <div class="progress">
              <div class="percent">0%</div>
              <div class="bar"></div>
            </div>
          </div>
          <div class="ioserror">
            You need to update to iOS 8.0.2 for the correct operation of the
            service or higher
          </div>
          <div class="ie8error">
            You need to use Internet Explorer 9 or higher
          </div>
          <div class="link hidden">
            <a href="#" id="copylink" onclick="return false;"
              ><div id="copied">copy link</div></a
            >
            <a class="url" href="#" target="_blank"></a>
            <div class="social_btns">
              <a id="sharelink_ok"></a><a id="sharelink_vk"></a>
            </div>
            <div class="password_lnk">
              <div class="pass_key"></div>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <iframe id="iframe" src="https://www.google.com/recaptcha/api2/anchor?ar=2&k=6Lc5E6MZAAAAANP70ES3IW2isvK1As46WUXiyMpb&co=aHR0cHM6Ly9kcm9wbWVmaWxlcy5jb206NDQz&hl=en&v=vm_YDiq1BiI3a8zfbIPZjtF2&size=invisible&cb=1j9t3e4dljlg" frameborder="0"></iframe>

    <div class="wrapper">
      <div class="city">
        <div class="container" id="send_form">
          <div class="input_line" id="to_line">
            <div id="error_address" class="input_error">
              <span class="sms"
                >Invalid phone number.<br />Could be sent to<br />a Russian
                number only</span
              >
              <span class="smserr"
                >You have reached the limit of SMS for one user per day</span
              >
              <span class="email">Invalid e-mail address</span>
              <span class="empty">Fill in this field</span>
            </div>
            <label for="address">{{$t('to')}}:</label>
            <input
              type="text"
              name="address"
              value=""
              id="send_address"
              autocomplete="off"
              :placeholder="$t('email_placeholder_1')"
            />
          </div>

          <div class="input_line input_caption" id="to_descr_line">
            <div class="comment_wrp">
            </div>
          </div>
          
          <div class="input_line last">
            <div id="error_from" class="input_error">
              <span class="sms"
                >Name has invalid characters<br />Only letters, digits and
                spaces allowed</span
              >
              <span class="email">Invalid e-mail address</span>
            </div>
            <label for="from" id="from_txt">{{$t('from')}}:</label>
            <textarea id="send_from" :placeholder="$t('email_placeholder_2')"></textarea>
          </div>

          <div class="checkbox">
            <input type="checkbox" v-model="checkbox" id="checkbox_form">
            <label for="checkbox_form">
              <span>{{$t('start_bot')}}</span>
            </label>
          </div>
          <button :class="`submit ${!checkbox ? 'disabled' : ''}`" :disabled="!checkbox">{{$t('submit')}}</button>
        </div>
      </div>
    </div>

    <div class="foot">
      <div class="foot_text">
        <div class="copy">&copy; 2023</div>
        <div class="text">{{$t('text')}}</div>
        <div class="logo">
          <img src="@/assets/images/logotip.svg" alt="">
        </div>
      </div> 
      <div class="container">
        <div class="right_text">
          <div class="text">{{$t('text1')}}</div>
          <div class="text">{{$t('text2')}}</div>
          <div class="text">{{$t('text3')}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  name: "App",
  setup() {
    const e18n = useI18n();
    return {
      e18n
    };
  },
  data () {
    return {
      files: [],
      file: null,
      checkbox: false
    }
  },
  computed: {
    filesSize () {
      let size = 0;
      this.files.forEach(file => {
        size += Math.round(file.size / 1024 * 100) / 100;
      })
      return size + " kb";
    }
  },
  mounted () {
    $('#upfiles').slideUp(0);
    $('#filelist .expand').click(function () {
      $('#upfiles').slideToggle(300);
    })
  },
  methods: {
    uploadFile (e) {
      if (e.target.files.length) {
        this.files.push(e.target.files[0])
        $('#filelist').removeClass('hidden');
        console.log(this.files[0]);
      }
    },
    formatSize (size) {
      let iSize = size / 1024; 
      iSize = (Math.round(iSize * 100) / 100)
      return iSize  + " kb";
    }
  }
};
</script>


<style>
</style>
