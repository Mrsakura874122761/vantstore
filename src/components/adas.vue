<template>
  <div>
    <template v-if="agree == 'yes'">

      <div class="my-5 booking"
           v-if="isFull == false && isApplication == true">
        <h2 class="label mb-4">
          {{ $t("請選擇您希望預約游泳池:") }}
        </h2>
        <!-- 游泳池 -->
        <b-form @submit="onSubmit"
                @reset="onReset"
                v-if="show">
          <b-form-group id="input-group-1"
                        :label="$t('游泳池:')"
                        label-for="input-1">
            <b-form-select id="input-1"
                           v-model="form.place"
                           :options="places"
                           v-validate="'required'"
                           :placeholder="$t('請選擇場地')"
                           name="input1"
                           :class="errors.has('input1') && 'is-invalid'"></b-form-select>
            <b-form-invalid-feedback :state="errors.has('input1')">
              {{ errors.first("input1") }}
            </b-form-invalid-feedback>
          </b-form-group>
          <!-- 日期 -->
          <b-form-group id="input-group-4"
                        :label="$t('日期:')"
                        label-for="input-4">
            <b-form-select id="input-4"
                           v-model="form.date"
                           :options="dates"
                           v-validate="'required'"
                           name="input4"
                           :placeholder="$t('請選擇日期')"
                           :class="errors.has('input4') && 'is-invalid'"></b-form-select>
            <b-form-invalid-feedback :state="errors.has('input4')">
              {{ errors.first("input4") }}
            </b-form-invalid-feedback>
          </b-form-group>
          <!-- 游泳節數 -->
          <b-form-group id="input-group-2"
                        :label="$t('游泳節數:')"
                        label-for="input-2">
            <b-form-select id="input-2"
                           v-model="form.item"
                           :options="items"
                           v-validate="'required'"
                           name="input2"
                           :placeholder="$t('請選擇設施編號')"
                           :class="errors.has('input2') && 'is-invalid'"></b-form-select>
            <b-form-invalid-feedback :state="errors.has('input2')">
              {{ errors.first("input2") }}
            </b-form-invalid-feedback>
            <!-- <span
          v-if="reminder(form.item)"
          style="font-size: 14px; color: #00f; padding: 3px"
          >{{ reminder(form.item) }}</span
        > -->
          </b-form-group>

          <!-- 泳池预约买票 -->
          <!-- 门票数量 -->
          <div class="Ticktes">
            <span>{{$t('现时可售门票数量')}}: </span>
            <span>{{ quota }}</span>
              <p class="cspan">**{{$t('數字顯示為可售門票的餘額,由於購買人數眾多,數字會不斷變化,最後以按[確認支付]為準')}}
            </p>
          </div>
           

          <!-- 泳池門票類別 -->
          <b-form-group id="input-group-3"
                        :label="$t('門票類別:')"
                        label-for="input-3">
            <b-form-select id="input-3"
                           v-model="form.number"
                           :options="numbers"
                           name="input3"
                           :placeholder="$t('')"
                           :class="errors.has('input3') && 'is-invalid'">
              <b-icon icon="tools"></b-icon>
            </b-form-select>
            <b-form-invalid-feedback :state="errors.has('input3')">
              {{ errors.first("input3") }}
            </b-form-invalid-feedback>
            <!-- <span
          v-if="reminder(form.category)"
          style="font-size: 14px; color: #00f; padding: 3px"
          >{{ reminder(form.category) }}</span
        > -->
            <span class="cspan">**{{$t('如果學生則可以揀選學生票,並於現場出示學生票')}}
            </span>
          </b-form-group>
          <!-- 隨行人數量增加 -->
          <div v-if="sum!=0"
               class="increase">
            <div>
              <span>{{$t('隨行人')}}:</span>
              <b-button variant="danger"
                        @click="add"
                        :disabled="sums >=sum ? true : false"
                        :class="sums >= sum ? 'btn_normal btn_disable' : 'btn_normal'">+ 添加
              </b-button>
            </div>
            <span class="cspan">{{$t('最多可添加')}}{{sum}}{{$t('名隨行12歲或以下小童')}}</span>
            <div class="add"
                 v-for="index of sums"
                 :key="index">
              <span>{{$t('小童門票')}}: </span>
              <div class="add_container">
                <div class="add_input">
                  <b-row>
                    <span class="mb-2"
                          style="padding-left: 18px">{{$t('運動易會員證號碼')}} :</span>
                  </b-row>

                  <!-- @input="input(index)" -->
                  <b-form-input v-model="form.card[index]"
                                :required="true"
                                type="number"
                                @blur.native="handleBlur(form.card[index], index)"
                                placeholder=""></b-form-input>
                  <div v-if="ispass==false"
                       style="color: red; font-size: 12px">
                    {{$t('會員驗證錯誤')}}
                  </div>
                  <b-button style="margin-top: 5px"
                            variant="primary"
                            @click="cut(index)">
                    {{$t('取消')}}
                  </b-button>
                </div>
              </div>
            </div>
          </div>

          <!-- <div class="mt-2">
            {{$t('佔位')}}
          </div> -->

          <b-container class="text-center">

            <b-button type="submit"
                      variant="primary"
                      class="my-5 pay-btn col-8 col-md-4 py-2">{{ $t("加入待付款清單") }}</b-button>

            <!-- <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
             
    </b-alert> -->
          </b-container>
          <Note />
          <b-modal ref="bv-modal-tips"
                   id="bv-modal-tips"
                   hide-footer
                   :title="$t('注意事項')">
            <p class="my-4">{{ $t("注意事項内容") }}</p>
            <b-button variant="primary"
                      size="md"
                      class="float-right mx-1"
                      @click="$bvModal.hide('bv-modal-tips')">{{ $t("不同意") }}</b-button>
            <b-button variant="primary"
                      size="md"
                      class="float-right mx-1"
                      @click="handlePopOk">{{ $t("同意") }}</b-button>
          </b-modal>
        </b-form>
        <!-- <button @click="commit"> 1313</button> -->
      </div>
      <div class="my-5 booking text-center"
           v-else-if="isFull == true">
        <p>{{ $t("每日只可預約二次") }}</p>
        <p>{{ $t("每次只可辦理一小時租用，在付款成功後才可辦理下一次預約。") }}</p>
        <p v-if="checkTotal > 0">
          {{ $t("閣下現正處於付款狀態中，如不繼續付款，可") }}
          <a href="javascript:void(0)"
             style="color: #007bff"
             @click="handleClearPadding()">{{ $t("按此清除") }}</a>
          {{ $t("之前記錄。") }}
        </p>
      </div>
      <div class="my-5 booking text-center"
           v-else-if="isApplication == false">
        <p>{{ $t("預約時間由早上八時三十分至晚上十二時") }}</p>
      </div>
    </template>

    <template v-if="agree == 'no'">
      <Agree @agreePass="agreePass"></Agree>
    </template>
  </div>

</template>

<script>
// let timeout = null
// function debounce (fn, wait) {
//   if (timeout !== null) clearTimeout(timeout)
//   timeout = setTimeout(fn, wait)
// }


import Agree from "@/views/agree"
import { mapState } from 'vuex'

import { clearPadding } from "@/api/order";
import {
  bookingVenue,
  bookingDate,
  bookingTicket,
  verifyCode,
  //   checkPayMent
} from "@/api/booking";
import { orderStart } from "@/api/order";
import Note from "../../components/Note";
export default {
  data () {
    return {
      showDismissibleAlert: false,
      ticketType: "",//門票類別id
      defaultticketType: "",//默認門票類別的id
      tickets: "",
      venue: "",//場地id
      follows: [],
      sum: 0, //最大添加随行人书
      sums: 0,//加入隨行人數
      isFull: false,
      isApplication: true,
      checkTotal: 0,
      ispass: true,
      quota: 0,//门票数量
      form: {
        place: "",
        item: "",
        number: "",
        date: "",
        category: "", //门票类型
        card: [], //会员证
      },
      places: [
        {
          text: this.$t("請選擇場地"),
          value: "",
          sum: "",
        },
      ],
      items: [
        {
          text: this.$t("請選擇節數"),
          value: "",
          quota: 0,
        },
      ],
      numbers: [
        {
          text: this.$t(""),
          value: "",
        },
      ],
      dates: [
        {
          text: this.$t("請選擇日期"),
          value: "",
          day: "",
          ticketnum: [],
          disable: false,
        },
      ],
      categories: [
        {
          text: this.$t(""),
          value: "",
        },
      ],
      allPlacesAndItems: [],
      show: true,
    };
  },
  computed: {
    ...mapState('process', ['agree'])
  },
  components: {
    Note,
    Agree,
  },
  watch: {
    "form.place": function (n) {
      if (n != "") {
        this.form.item = "";
        this.form.number = "";
        this.form.date = "";
        this.follows = [];
        this.tickets = "";
        this.defaultticketType = ""
        this.items = [
          {
            text: this.$t("請選擇節數"),
            value: "",
          },
        ];
        this.dates = [
          {
            text: this.$t("請選擇日期"),
            value: "",
          },
        ];
        this.venue = n;
        for (let i = 1; i < this.places.length; i++) {
          if (n == this.places[i].value) {
            this.sum = this.places[i].sum
          }
        }
        // 添加日期信息
        bookingDate({
          venue: n,
        }).then((res) => {
          var dates = [
            {
              text: this.$t("請選擇日期"),
              value: "",
            },
          ];
          for (const [key, value] of Object.entries(res.data)) {
            dates.push({
              text: value.title,
              value: key,
              day: value.day,
              ticketnum: value.tickets,
              disable: value.disable,
            });
          }
          this.dates = dates;
          // if(this.dates.disable){
          //    this.Ticketnums=0;
          // }else{
          //     this.Ticketnums=this.datas.ticketnum;
          // }
        });
        bookingTicket({
          venue: n,
        }).then((res) => {
          var numbers = [
            {
              text: res.data[0].title,
              value: '',
            },
          ];
          for (const [key, value] of Object.entries(res.data)) {
            console.log(key);
            numbers.push({
              text: value.title,
              value: value.id,
            });
          }
          numbers.splice(1, 1)
          // numbers[0].value=res.data[0].id
          this.numbers = numbers;
          this.number = this.numbers[0].text
          this.ticketType = res.data[0].id
          this.defaultticketType = res.data[0].id
        });
      } else {
        this.items = [
          {
            text: this.$t("請選擇節數"),
            value: "",
          },
        ];
        this.numbers = [
          {
            text: this.$t(""),
            value: "",
          },
        ];
        this.dates = [
          {
            text: this.$t("請選擇日期"),
            value: "",
          },
        ];
        this.form.item = "";
        this.form.number = "";
        this.form.date = "";
        this.follows = [];
        this.sum = 0
      }


    },
    "form.date": function (n) {
      if (n != "") {
        this.form.item = "";
        this.items = [
          {
            text: this.$t("請選擇節數"),
            value: "",
          },
        ];
        console.log(n);
        var items = [
          {
            text: this.$t('請選擇節數'),
            value: "",
            quota: 0,
          },
        ];
        for (let i = 1; i < this.dates.length; i++) {
          if (n == this.dates[i].day) {

            for (const [key, value] of Object.entries(
              this.dates[i].ticketnum
            )) {
              console.log(key)
              items.push({
                text: value.sectionTitle + value.timeStart + '-' + value.timeEnd,
                value: value.id,
                quota: value.quota
              });
            }

          }
        }
        this.items = items;
      } else {
        this.form.item = "";
        this.items = [
          {
            text: this.$t("請選擇節數"),
            value: "",
          },
        ];
      }
    },

    "form.item": function (n) {
      if (n != "") {
        this.quota = 0;
        this.tickets = n;
        for (let i = 1; i < this.items.length; i++) {
          if (n == this.items[i].value) {
            this.quota = this.items[i].quota
          }
        }
        console.log(this.tickets)

      } else {
        this.quota = 0;
        this.tickets = "",
          console.log(this.tickets)
      }
      // this.form.number = "";
      //   this.form.date = "";
    },

    "form.number": function (n) {
      if (n != "") {
        this.numbers[0].value = this.defaultticketType;
        console.log(this.numbers)
        this.ticketType = n;
        console.log(this.ticketType)
        //   devices({
        //     siteId: this.form.place,
        //     sportItemId: this.form.item,
        //   }).then((res) => {
        //     this.numbers = [
        //       {
        //         text: this.$t(""),
        //         value: "",
        //       },
        //     ].concat(res.data);
        //   });
        // } else {
        //   this.numbers = [
        //     {
        //       text: this.$t(""),
        //       value: "",
        //     },
        //   ];
        // this.dates = [
        //   {
        //     text: this.$t("請選擇日期"),
        //     value: "",
        //   },
        // ];
      } else {
        this.ticketType = this.defaultticketType;
      }
      // this.form.number = "";
      //   this.form.date = "";
    },
  },
  created () {
    this.postreactMassage = window.ReactNativeWebView;
    this.getBookingVenue();
  },
  methods: {
    // input (index) {
    //   // 防抖函數
    //   debounce(() => {
    //     console.log(this.form.card[index]);
    //   }, 1000)
    // },
    agreePass () {
      // this.agree = e
      this.$store.commit('process/SET_AGREE', 'yes')
      console.log(`this.agree`, this.agree);
    },
    commit () {
      // this.showDismissibleAlert=true
      orderStart({
        captcha: "141592",
        venue: this.venue,
        follows: this.follows,
        ticket: this.tickets,
        ticketType: this.ticketType
      }).then((res) => {
        console.log(res.code)
        if (res.code == 0) {
          this.$emit('commits', res.data.number)
          console.log(res.data.number)
          //  this.$router.push({name: 'cartApp', params:{number:res.data.number}})
        } else {
          console.log(res.message)

        }
      })
    },
    handleBlur (vcode, index) {
      console.log(vcode, index);
      verifyCode({ code: vcode }, index).then((res) => {
        if (res.code == 0) {
          this.ispass = true;
          console.log("通過驗證");
          this.follows.push(vcode)
          console.log(this.follows)

        }
        else {
          this.ispass = false;
          console.log("會員驗證錯誤");

        }
      });
    },
    getBookingVenue () {
      bookingVenue().then((res) => {
        var data = res.data;
        var places = this.places;
        data.forEach((value) => {
          places.push({
            text: value.title,
            value: value.id,
            sum: value.maxFollowNum
          });
        });
        this.places = places;
        this.allPlacesAndItems = data;
      });
    },
    // checkIsFull() {
    //   checkFull()
    //     .then((res) => {
    //       if (res.code == 0) {
    //         this.isFull = true;
    //         this.checkTotal = res.data.checkTotal;
    //         if (res.data.isApplication == false) {
    //           // 开放时间
    //           this.isApplication = res.data.isApplication;
    //           this.isFull = false;
    //         }
    //       }
    //     })
    //     .catch(() => {
    //       // console.log(err);
    //       this.show = true;
    //     });
    // },
    // getVenueList() {
    //   venueList().then((res) => {
    //     console.log(res);
    //     var data = res.data;
    //     var places = this.places;
    //     data.venues.forEach((value) => {
    //       places.push({
    //         text: value.name,
    //         value: value.site,
    //       });
    //     });
    //     this.places = places;
    //     this.allPlacesAndItems = data;
    //   });
    // },
    reactpostMessage () {
      try {
        this.postreactMassage(
          JSON.stringify({
            ApiKey: this.$store.getters.apikey,
          })
        );
      } catch (err) {
        console.log(err);
      }
    },
    onSubmit (evt) {
      evt.preventDefault();
      // alert(JSON.stringify(this.form));
      this.$validator.validate().then((validate) => {
        if (validate) {
          this.commit()

          // if (window.ReactNativeWebView) {
          //   window.ReactNativeWebView.postMessage(
          //     JSON.stringify({
          //       to: "showTips",
          //     })
          //   );
          // }
          // this.$refs["bv-modal-tips"].show();


        }
      });
    },
    onReset (evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    handlePopOk () {
      var data = this.allPlacesAndItems.filter(
        (v) => v.site == this.form.place
      );
      this.form.placeName = data[0].name;
      var item = data[0].items.filter((v) => v.code == this.form.item);
      this.form.itemName = item[0].name;
      this.$store.dispatch("order/addItem", this.form);
      console.log(this.form);
      var numbers = this.numbers;
      numbers.splice(0, 1);
      this.$store.dispatch("booking/updateBookingNo", numbers);
      if (this.$route.name == "bookingApp") {
        this.$router.push({
          name: "bookingListApp",
        });
      } else {
        this.$router.push({
          name: "bookingList",
        });
      }
    },

    handleClearPadding () {
      clearPadding({ status: 2 }).then((res) => {
        if (res.code == 0) {
          location.reload();
        } else {
          alert(res.message);
        }
      });
    },
    reminder (v) {
      var data = this.items.filter((value) => value.value == v);
      return data[0] ? data[0].reminder : null;
    },
    add () {
      this.sums++;
      console.log(this.sum);
    },
    cut (index) {
      this.form.card.splice(index, 1);
      console.log(this.form.card);
      this.sums--;
    },
  },
};
</script>
