<template>
  <div>
    <!-- <button @click="e18n.locale.value = 'ru'">Ru</button>
  <button @click="e18n.locale.value = 'en'">En</button>
  <h1>{{$t('hello')}}</h1> -->
    <div class="wrapper" id="dropzone">
      <div class="dropzone_shadow"></div>
      <div class="container">
        <div class="main">
          <div class="loader fonly">
            <div id="virusThreat">
              <a href="/" class="pbtn_exit vrs_exit"></a>
              <form class="prm">
                <div class="red">Внимание,<br />подозрительные файлы</div>
                <br /><br />
                <div class="txt">
                  Антивирус обнаружил в загрузке зараженные файлы, поэтому они
                  были удалены.
                </div>
                <br /><br />
                <input
                  type="button"
                  class="vrs_exit"
                  value="OK"
                  onclick="$('#virusThreat').fadeOut(300); return false;"
                /><br />
              </form>
            </div>

            <div class="utext tfonly">
              <b
                ><span class="drptxt">drop</span><br />
                files</b
              >
            </div>
            <div class="bg">
              <div class="arrow"></div>
              <div class="dot1"></div>
              <div class="dot2"></div>
              <div class="dot3"></div>
              <div id="upload_container">
                <div class="logo" id="browse_btn_x"></div>
              </div>
            </div>
          </div>
          <div id="filelist" class="hidden">
            <div class="info">
              <a href="/" class="exit"></a>
              <div class="filestats">
                <div class="fileCount">0</div>
                <span>files</span>
                <div class="fileSize">0 КБ</div>
                total size
                <noindex>
                  <div
                    class="hiddenContent notification noBannerSlide"
                    id="notifySize"
                  >
                    <div class="ntrArrow"><div class="ntrArrowBg"></div></div>
                    <div class="nTitle">Maximum size</div>
                    <div class="nContent">
                      of the uploaded files is up to 50 Gygabytes
                    </div>
                  </div>
                </noindex>
              </div>
              <div class="time">
                <div class="counter">00:00:00</div>
                to complete<br />uploading
              </div>
            </div>
            <div class="expand">more</div>
            <div class="files" id="upfiles">
              <ul></ul>
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
    <div class="wrapper">
      <div class="city">
        <div class="container" id="send_form">
          <div class="input_line input_caption light">
            <b class="period_bg"></b
            ><input type="radio" name="period" value="0" id="period0" /><label
              for="period0"
              id="period0_txt"
              >1 download</label
            >
            <input
              type="radio"
              name="period"
              value="1"
              id="period1"
              style="display: none"
            /><label for="period1" style="display: none" id="period1_txt"
              >3 days
            </label>
            <input
              type="radio"
              name="period"
              value="2"
              id="period2"
              checked="checked"
            /><label for="period2" id="period2_txt">7 days </label>
            <input type="radio" name="period" value="3" id="period3" /><label
              for="period3"
              id="period3_txt"
              >14 days
            </label>
            <b>
              <div class="group">
                <div class="gr_open gr_active"></div>
                <div class="gr_slider"></div>
                <div class="gr_close"></div>
              </div>

              <div class="password">
                <div class="pass_open pass_active"></div>
                <div class="pass_slider"></div>
                <div class="pass_close"></div>
              </div>

              <div class="changedir">
                <div class="dir_abc dir_active">ABC</div>
                <div class="dir_slider"></div>
                <div class="dir_num">123</div>
              </div>
            </b>
          </div>

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
            <div class="comment_btn"><span>0/450</span></div>
            <label for="address">To:</label>
            <input
              type="text"
              name="address"
              value=""
              id="send_address"
              autocomplete="off"
              placeholder="E-mail or SMS number"
            />
          </div>
          <div class="input_line input_caption" id="to_descr_line">
            <div class="comment_wrp">
              <div class="comment_arrow"></div>
              <div class="comment_gradt"></div>
              <div class="comment_gradb"></div>
              <textarea
                id="comment"
                name="comment"
                class="comment_style"
                placeholder="описание"
                disabled="disabled"
              ></textarea>
            </div>
          </div>
          <div class="input_line">
            <div id="error_from" class="input_error">
              <span class="sms"
                >Name has invalid characters<br />Only letters, digits and
                spaces allowed</span
              >
              <span class="email">Invalid e-mail address</span>
            </div>
            <label for="from" id="from_txt">From:</label>
            <input
              type="text"
              name="from"
              value=""
              id="send_from"
              maxlength="64"
              placeholder="Name or E-mail"
            />
            <button name="btn" id="send_btn"></button>
          </div>
        </div>
        <div class="container hiddenContent" id="sended_info">
          <div class="input_info">
            Sent to <span class="csms">phone</span
            ><span class="cemail">E-mail</span>
            <div class="sended_address"></div>
            <div class="csms" id="sms_status">
              Status: <span>Delivering...</span>
            </div>
          </div>
        </div>
        <div class="container hiddenContent" id="not_sent_email_spam_info">
          <div class="input_info">
            E-mail not sent.<br />
            Suspicions for spam.
          </div>
        </div>
        <div class="container hiddenContent" id="not_sent_email_info">
          <div class="input_info">E-mail not sent.<br /></div>
        </div>
        <div class="container hiddenContent" id="sended_info_group">
          <div class="input_info">
            Автор
            <div class="sended_address"></div>
          </div>
        </div>
      </div>
    </div>

    <noindex>
      <div class="hiddenContent notification notifyOne" id="notifyUpload">
        <div class="ntrArrow"><div class="ntrArrowBg"></div></div>
        <div class="nTitle">To upload files</div>
        <div class="nContent">
          click on the circle or drag&amp;drop them in grey field
        </div>
      </div>

      <div class="hiddenContent notification" id="notifyUpload2">
        <div class="ntrArrow"><div class="ntrArrowBg"></div></div>
        <div class="nTitle">Share image or text</div>
        <div class="nContent">
          from clipboard just by pressing CTRL+V. It's content will immediately
          turn into a file
        </div>
      </div>

      <div class="hiddenContent notification" id="notifyPeriod0">
        <div class="nArrow"><div class="nArrowBg"></div></div>
        <div class="nTitle">Storage life of 1 download</div>
        <div class="nContent">
          means that files will be deleted immediately after being downloaded by
          first user. Choose that option if your information is confidential.
          The maximum storage time 14 days
        </div>
      </div>

      <div class="hiddenContent notification" id="notifyPeriod1">
        <div class="nArrow"><div class="nArrowBg"></div></div>
        <div class="nTitle">Storage life of files</div>
        <div class="nContent">after which they will be completely deleted</div>
      </div>

      <div class="hiddenContent notification" id="notifyPeriodDis">
        <div class="nArrow"><div class="nArrowBg"></div></div>
        <div class="nTitle">Storage life of files</div>
        <div class="nContent">temporarily unavailable option</div>
      </div>

      <div class="hiddenContent notification" id="notifyPasswd">
        <div class="nArrow"><div class="nArrowBg"></div></div>
        <div class="nTitle">Password will protect</div>
        <div class="nContent">your information from unauthorized access</div>
      </div>

      <div class="hiddenContent notification" id="notifyKomy">
        <div class="ntlArrow"><div class="ntlArrowBg"></div></div>
        <div class="nTitle">Send link by SMS or e-mail.</div>
        <div class="nContent">
          Up to 14 e-mail recipients or one phone number are supported to be
          sent to
        </div>
      </div>
      <div class="hiddenContent notification" id="notifyComment">
        <div class="ntlArrow"><div class="ntlArrowBg"></div></div>
        <div class="nTitle">Отображение ссылки можно</div>
        <div class="nContent">
          сопроводить сообщением, содержащим не более 450 символов и 20 строк.
        </div>
      </div>

      <div class="hiddenContent notification noBannerSlide" id="notifySocial">
        <div class="nArrow"><div class="nArrowBg"></div></div>
        <div class="nTitle">Share link to the upload</div>
        <div class="nContent">with your fiends in social networks</div>
      </div>

      <div class="hiddenContent notification" id="notifyDigit">
        <div class="nArrow"><div class="nArrowBg"></div></div>
        <div class="nTitle">Change your link and password</div>
        <div class="nContent">
          into digit format, if you're planning to use it on TV with INETCOM.TV
          app or inform verbally
        </div>
      </div>

      <div class="hiddenContent notification" id="notifySpecial1">
        <div class="nClose"></div>
        <div class="ntlArrow"><div class="ntlArrowBg"></div></div>
        <div class="nImage"></div>
        <div class="nTitle">Owners of SMART.TV</div>
        <div class="nContent">
          can watch movies or other media files, uploaded to Dropmefiles, on
          screen of their TV with our free app
          <a href="http://inetcom.tv/smarttv" target="_blank">ИНЕТКОМ.ТВ</a>
        </div>
      </div>

      <div class="hiddenContent notification" id="notifyLoop1">
        <div class="nClose"></div>
        <div class="nrArrow"><div class="nrArrowBg"></div></div>
        <div class="iImage"></div>
        <div class="nTitle">Share images</div>
        <div class="nContent">
          or text from the clipboard by just pressing CTRL+V. Upload will start
          automatically
        </div>
      </div>

      <div class="hiddenContent notification" id="notifyLoop2">
        <div class="nClose"></div>
        <div class="nrArrow"><div class="nrArrowBg"></div></div>
        <div class="iImage"></div>
        <div class="nTitle">To upload files</div>
        <div class="nContent">
          drag&amp;drop them to the page or click on a circle and select files
          in popup dialog
        </div>
      </div>

      <div class="hiddenContent notification" id="notifyLoop5">
        <div class="nClose"></div>
        <div class="nrArrow"><div class="nrArrowBg"></div></div>
        <div class="iImage"></div>
        <div class="nTitle">To quickly share your screen</div>
        <div class="nContent">
          just take a screenshot<br />and paste it from clipboard<br />to
          Dropmefiles
        </div>
      </div>

      <div id="captcha_wrapper">
        <div id="captcha_box">
          <div id="recaptcha_widget">
            <div class="cheader">Пожалуйста, подтвердите, что вы не робот</div>
            <div id="recaptcha_image"></div>
            <a id="creload" href="javascript:void(0);"></a>
            <div id="recaptcha_only_if_incorrect_sol">
              неверный код, опробуйте ввести еще раз
            </div>
            <div class="clearing_f"></div>
            <div class="recaptcha_input">
              <span class="recaptcha_only_if_image">ENTER TEXT:</span>
              <input
                type="text"
                id="recaptcha_response_field"
                name="recaptcha_response_field"
              /><a href="javascript:void(0);" id="verify_trigger">OK</a>
            </div>
          </div>
        </div>
      </div>
    </noindex>

    <div class="clearing_f"></div>

    <div class="wrapper">
      <noindex>
        <div class="rules_wrapper">
          <div class="rules">
            <div id="rules_close" class="rules_close"></div>
            <h2>User agreement</h2>
            <div class="rules_message">
              <ol>
                <li>
                  Dropmefiles.com referred to as “the Website”, is designed to
                  share and store files.
                </li>
                <li>
                  This User agreement shall come into effect from the beginning
                  of the use of the Website.
                </li>
                <li>
                  When using the Website it is forbidden to place:
                  <ul>
                    <li>Materials that are illegal in Russian Federation</li>
                    <li>
                      Intellectual property, copying which is prohibited by the
                      original owners.
                    </li>
                    <li>Malware</li>
                  </ul>
                </li>
                <li>
                  Materials that violates Section 3 of this agreement will be
                  deleted from the Website upon detection.
                </li>
                <li>The Website is not guaranteed safekeeping of the files.</li>
                <li>
                  Under no circumstance the Administration of the Website is not
                  responsible for the content uploaded and sent by a User via
                  the Website.
                </li>
                <li>
                  Under no circumstance the Administration of the Website is not
                  responsible for all sorts of lost profits or for any damages
                  by any reasons.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </noindex>

      <div class="selector-footer">
        <div class="up_layer">
          <div id="help_close" class="rules_close help_close"></div>
        </div>
        <a class="help-button">Help</a>
        <a class="rule-button">Rules</a>
      </div>
      <div id="footer">
        <div id="help">
          <noindex
            ><div class="help_wrap">
              <div class="container">
                <div class="stage1">
                  <div class="s1_right">
                    <div class="h_green s1_drop2">
                      Our service allows<br />you to multiupload<br />files and
                      folders
                    </div>
                    <div class="h_green s1_drop3">
                      Paste images or<br />text from clipboard<br />by
                      pressing<br /><span>CTRL+V</span>
                    </div>
                    <div class="h_green s1_drop4">
                      Delete wrongly<br />uploaded files by clicking<br />on a
                      cross symbol<br />at the top right<br />corner of file
                      icon.
                    </div>

                    <span class="h_small"
                      >* List of supported features depends on<br />�&nbsp;�&nbsp;your
                      browser. We recommend Google Chrome</span
                    >
                  </div>

                  <div class="s1_left">
                    <span class="h_blue"
                      >Drop your files<br />to the site window,</span
                    >
                    or select them in browse popup,<br />by clicking on a
                    dropmefiles circle.<br />Add more files to your upload<br />same
                    way.
                    <div class="s1_drop1"></div>
                    <div class="s1_size">
                      Maхimum size for the upload<br />is limited up to 50
                      Gb,<br />period of storage is up to 14 days
                    </div>
                  </div>

                  <div class="clearing_f"></div>
                </div>

                <div class="stage2">
                  <div class="s2_clock"></div>
                  <div class="h_blue">
                    Link to your upload will be generated immediately
                  </div>

                  <div class="s2_drop1">
                    Without waiting for upload completion<br />send it to an
                    e-mail or mobile phone<br />of your recipient.
                  </div>
                  <div class="s2_drop2">
                    Copy link to the clipboard or share it<br />in social
                    networks by clicking<br />the corresponding icon
                  </div>

                  <div class="s2_link">
                    Link identifier is a 5-character combination,<br />simple
                    even for verbal transmission<br /><br />
                    <a href="/d1m2f" target="_blank"></a>
                  </div>
                </div>

                <div class="stage4">
                  <div class="s4_right">
                    <div class="s4_m1">
                      <div class="s4_m1_bg"></div>
                      <span>*</span>Nowadays, a prerequisite for this option
                      is<br />
                      to connect both devices to a common wi-fi network.<br />We
                      are working to cancel this restriction
                    </div>
                    <div class="s4_m2"></div>
                  </div>

                  <div class="s4_drop1 s4_m3">
                    <div class="h_blue">
                      For quick transfer<br />files from your<br />mobile
                      device<br />to your computer
                    </div>
                    <span
                      >open dropmefiles.com on your phone, tablet<br />or
                      computer, then start downloading files<br />on your mobile
                      device and press the<br />computer's spacebar with the
                      upper left corner.<br />The link to the file will be
                      transferred<br />instantly, and the download will begin
                      <br />immediately after the upload is finished.<br />The
                      process works in the same way<br />in the direction
                      computer <span class="s4_rarrow"></span> phone.</span
                    >
                  </div>

                  <div class="clearing_f"></div>
                </div>

                <div class="stage3">
                  <div class="s3_right">
                    By posting<br />information<br />in our<br />file
                    hosting,<br />please respect<br />the rights of<br />copyright
                    holders,<br />as well as<br />personal privacy
                  </div>

                  <div class="s3_left">
                    <div class="h_blue">
                      If your information<br />is confidential
                    </div>
                    <span
                      >make it password protected or use<br />option "1
                      download" over the «FROM» field.<br />Files will be
                      removed right after the first<br />successful download by
                      a recipient.</span
                    >
                  </div>

                  <div class="clearing_f"></div>
                </div>

                <div class="stage5">
                  <div class="s5_right">
                    <div class="s5_drop1">
                      Also you can drag out<br />files, folders, previews<br />or
                      «DOWNLOAD» button<br />to the needed place<br />of your
                      computer's<br />file system
                    </div>
                    <div class="s5_drop2">
                      When download<br />multiple files<br />they are
                      automatically<br />compressed into<br />a single
                      zip-archive
                    </div>
                  </div>

                  <div class="s5_left">
                    <div class="h_green">
                      To download files<br />to your computer press<br />the
                      «DOWNLOAD» button
                    </div>
                    <span
                      >If you need only some files<br />from the upload, select
                      them<br />in «more» section.</span
                    >
                    <div class="s5_dlall"></div>
                  </div>

                  <div class="clearing_f"></div>

                  <div class="s5_col1">
                    <div class="h_green h_green_small">
                      Media content<br />contained in<br />the upload
                    </div>
                    <span
                      >is accessible in the form<br />of a preview. We are<br />working
                      to add more<br />
                      image and video formats<br />to be supported<br />by our
                      service.</span
                    >
                  </div>
                  <div class="s5_col2">
                    <div class="h_green h_green_small">
                      The number<br />of users who<br />have downloaded<br />the
                      link
                    </div>
                    <span
                      >is displayed on<br />the counter at the<br />bottom of
                      the screen.</span
                    >
                  </div>
                  <div class="s5_col3">
                    <div class="h_green h_green_small">
                      If you wish<br />to report<br />any content
                    </div>
                    <span
                      >click to the right<br />of the downloads bar.<br />Do not
                      forget to specify<br />
                      the reason of the complaint,<br />as well as your
                      contacts<br />for feedback.</span
                    >
                  </div>

                  <div class="clearing_f"></div>
                </div>

                <div class="stage6">
                  <div class="h_blue">Your suggestions<br />and wishes</div>
                  <span
                    >we are ready to listen with<br />pleasure in our groups in
                    social<br />
                    networks
                    <a
                      href="http://vk.com/topic-43668652_29193924"
                      target="_blank"
                      >vkontakte</a
                    >.<br />
                    e-mail:
                    <a href="mailto:dropmefiles@inetcom.ru" target="_blank"
                      >dropmefiles@inetcom.ru</a
                    ></span
                  >
                </div>
              </div>
            </div></noindex
          >
        </div>
        <div class="container" id="footer_container">
          <ul class="footer-socials">
            <li>
              <a class="vk" href="http://vk.com/inetcom_ru" target="_blank"></a>
            </li>
          </ul>
          <h1>DropMeFiles - free one-click file sharing service.</h1>
          Share your pictures, send large videos, exchange music or transfer big
          files.<br />
          No registration required. Unlimited upload/download speed.
        </div>
      </div>
      <div id="footer2">
        <div class="shadow-cut">
          <div class="container">
            <ul class="footer-projects">
              <li>
                <a
                  class="cams"
                  href="http://cameras.inetcom.ru"
                  target="_blank"
                ></a>
              </li>
              <li>
                <a class="tv" href="http://inetcom.tv" target="_blank"></a>
              </li>
              <li>
                <a
                  class="smart"
                  href="http://inetcom.tv/smarttv"
                  target="_blank"
                ></a>
              </li>
            </ul>

            <strong class="footer-logo"
              ><a href="http://inetcom.ru" target="_blank">Инетком</a></strong
            >
            <ul class="footer-services">
              <li><a href="http://inetcom.ru" target="_blank">интернет</a></li>
              <li>
                <a href="http://inetcom.tv" target="_blank">телевидение</a>
              </li>
              <li><a href="http://inetcom.ru" target="_blank">телефония</a></li>
              <li>
                <a href="http://inetcom.ru/business?p=video" target="_blank"
                  >видеонаблюдение</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <noindex>
      <div class="hiddenContent" id="unload_message_upload">Идет загрузка!</div>
      <div class="hiddenContent" id="unload_message_complete">
        Some files were uploaded!
      </div>
      <div class="hiddenContent" id="unload_message_dlcomplete">uploaded</div>
      <div class="hiddenContent" id="sms_message_ok">Delivered</div>
      <div class="hiddenContent" id="sms_message_error">Не доставлено</div>
      <div class="hiddenContent" id="share_message_title">
        I uploaded files on DropMeFiles
      </div>
      <div class="hiddenContent" id="share_message_descr">
        DropMeFiles – free one-click file sharing service
      </div>
      <div class="hiddenContent" id="upload_message_expand">more</div>
      <div class="hiddenContent" id="upload_message_expanded">hide</div>
      <div class="hiddenContent" id="fl_message_file">file</div>
      <div class="hiddenContent" id="fl_message_files">files</div>
      <div class="hiddenContent" id="fl_message_filess">files</div>
      <div class="hiddenContent" id="fl_message_utext">add</div>
      <div class="hiddenContent" id="sms_message_placeholder">Name</div>
      <div class="hiddenContent" id="sms_message_email_placeholder">
        Name or E-mail
      </div>
      <div class="hiddenContent" id="share_message_title">
        I uploaded files on DropMeFiles
      </div>
      <div class="hiddenContent" id="share_message_descr">
        DropMeFiles – free one-click file sharing service
      </div>
      <div class="hiddenContent" id="upload_message_expand">more</div>
      <div class="hiddenContent" id="upload_message_expanded">hide</div>
      <div class="hiddenContent" id="counter_message_days">days</div>
      <div class="hiddenContent" id="dl_message_some">
        <span class="count"></span><span class="count_s"></span
        ><span class="size"></span>
      </div>
      <div class="hiddenContent" id="dl_message_all">download</div>
      <div class="hiddenContent" id="dl_message_pre">
        download when uploaded
      </div>
      <div class="hiddenContent" id="dl_message_wait">
        waiting...<small>click to cancel</small>
      </div>
      <div class="hiddenContent" id="upass_wrong">wrong password</div>
      <div class="hiddenContent" id="upass_disconnect">
        Error! Server is not responding
      </div>
      <div class="hiddenContent" id="dl_message_some_files">
        ["file","files","files"]
      </div>

      <div class="hiddenContent notification noBannerSlide" id="notifyLogin">
        <div class="ntlArrow"><div class="ntlArrowBg"></div></div>
        <div class="nTitle">Abonents of INETCOM.TV can</div>
        <div class="nContent">
          authorize under their profile and get extended functionality to manage
          their uploads
        </div>
      </div>

      <div
        class="hiddenContent notification noBannerSlide notifyOne"
        id="notifyLike"
      >
        <div class="nrArrow"><div class="nrArrowBg"></div></div>
        <div class="nTitle">Liked our service?</div>
        <div class="nContent">Tell about it on social networks</div>
      </div>

      <div id="pastewrapper">
        <div id="paster" contenteditable="true"></div>
      </div>
    </noindex>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  name: "App",
  setup() {
    const e18n = useI18n();
    return { e18n };
  },
};
</script>


<style>
</style>
