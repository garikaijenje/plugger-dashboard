<template>
    <div id="audio-player-root" >
        <!-- Hide the default audio player -->
        <div >
            <audio
                    style="display:none"
                    ref="player"
                    :id="playerid"
            >
                <source :src="url" type="audio/mpeg" />
            </audio>
        </div>

        <av-bars class="text-center"
                   :outline-width="0"
                   :progress-width="5"
                   :outline-meter-space="5"
                   :playtime="true"
                   :canv-top="true"
                   progress-color="#6200EE"
                   bar-color="#6200EE"
                   playtime-color="#6200EE"
                   line-color="#6200EE"
                   playtime-font="18px Monaco"
                   ref-link="player"
        ></av-bars>
        <div>
           <div class="px-3">
               <input
                       v-model="playbackTime"
                       type="range"
                       min="0"
                       :max="audioDuration"
                       class=""
                       id="position"
                       name="position"
               />
           </div>
            <div class="d-flex text-center text-white align-items-center px-5">
                <strong class="text-sm"  v-html="playTime"> 00:00 </strong>
                <i @click="toggleAudio()" v-show="!isPlaying" class="mdi mdi-play mdi-48px text-primary mx-auto"></i>
                <i @click="toggleAudio()" v-show="isPlaying" class="mdi mdi-pause mdi-48px text-primary mx-auto"></i>
                <strong class="text-sm" v-html="totalTime()"> 00:00 </strong>
            </div>

<!--            <div id="player-row" class="inline-flex flex-wrap w-full max-w-5xl">-->
<!--                <div id="button-div" class="flex-initial pr-3">-->
<!--                    <svg-->
<!--                            @click="toggleAudio()"-->
<!--                            v-show="!isPlaying"-->
<!--                            class="play-button text-gray-400"-->
<!--                            :class="{ 'text-orange-600': audioLoaded, 'hover:text-orange-400': audioLoaded, 'cursor-pointer': audioLoaded }"-->
<!--                            xmlns="http://www.w3.org/2000/svg"-->
<!--                            viewBox="0 0 20 20"-->
<!--                            fill="currentColor"-->
<!--                    >-->
<!--                        <path-->
<!--                                fill-rule="evenodd"-->
<!--                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"-->
<!--                                clip-rule="evenodd"-->
<!--                        />-->
<!--                    </svg>-->
<!--                    <svg-->
<!--                            @click="toggleAudio()"-->
<!--                            v-show="isPlaying"-->
<!--                            class="play-button text-orange-400 hover:text-orange-400 cursor-pointer"-->
<!--                            xmlns="http://www.w3.org/2000/svg"-->
<!--                            viewBox="0 0 20 20"-->
<!--                            fill="currentColor"-->
<!--                    >-->
<!--                        <path-->
<!--                                fill-rule="evenodd"-->
<!--                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"-->
<!--                                clip-rule="evenodd"-->
<!--                        />-->
<!--                    </svg>-->
<!--                </div>-->

<!--                <div-->
<!--                        id="progress-bar"-->
<!--                        class="flex-grow bg-white border border-blue-200"-->
<!--                >-->
<!--                    <div class="overlay-container relative w-full h-full">-->
<!--                        <input-->
<!--                                v-model="playbackTime"-->
<!--                                type="range"-->
<!--                                min="0"-->
<!--                                :max="audioDuration"-->
<!--                                class="slider w-full h-full"-->
<!--                                id="position"-->
<!--                                name="position"-->
<!--                        />-->

<!--                        &lt;!&ndash; Show loading indicator until audio has been loaded &ndash;&gt;-->

<!--                        <div v-show="!audioLoaded"-->
<!--                             class="w-full absolute top-0 bottom-0 right-0 left-0 px-2 pointer-events-none"-->
<!--                             style="color: #94bcec">-->
<!--                            Loading please wait...-->
<!--                        </div>-->

<!--                        <div-->
<!--                                v-show="audioLoaded"-->
<!--                                class="flex w-full justify-between absolute top-0 bottom-0 right-0 left-0 px-2 pointer-events-none"-->
<!--                        >-->

<!--                            <span class="text-sm" style="color: #94bcec" v-html="elapsedTime()"> 00:00 </span>-->

<!--                            <span class="text-sm" style="color: #94bcec" v-html="totalTime()"> 00:00 </span>-->

<!--                        </div>-->

<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
        </div>

        <!-- outer gray border -->
    </div>
    <!-- white bg -->
</template>

<script>
    //import { mapState } from 'vuex'
    export default {
        props: ["url", "playerid"],
        /**
         * playbackTime = local var that syncs to audio.currentTime
         * audioDuration = duration of audio file in seconds
         * isPlaying = boolean (true if audio is playing)
         *
         **/

        data() {
            return {
                playbackTime: 0,
                audioDuration: 100,
                audioLoaded: false,
                isPlaying: false

            };
        },


        computed : {
            playTime : function ()
            {
                return this.convertTime(this.playbackTime);
            }
        },

        methods: {
            //Set the range slider max value equal to audio duration
            initSlider() {
                var audio = this.$refs.player;
                if (audio) {
                    this.audioDuration = Math.round(audio.duration);
                }
            },

            //Convert audio current time from seconds to min:sec display
            convertTime(seconds){
                const format = val => `0${Math.floor(val)}`.slice(-2);
                var hours = seconds / 3600;
                var minutes = (seconds % 3600) / 60;

                return [minutes, seconds % 60].map(format).join(":");

            },

            //Show the total duration of audio file
            totalTime() {
                var audio = this.$refs.player;
                if (audio) {
                    var seconds = audio.duration;
                    return this.convertTime(seconds);

                } else {
                    return '00:00';
                }
            },

            //Display the audio time elapsed so far
            elapsedTime() {
                var audio = this.$refs.player;
                if (audio) {
                    var seconds = audio.currentTime;
                    return this.convertTime(seconds);
                } else {
                    return '00:00';
                }
            },

            //Playback listener function runs every 100ms while audio is playing
            playbackListener(e) {

                var audio = this.$refs.player;

                //Sync local 'playbackTime' var to audio.currentTime and update global state
                this.playbackTime = audio.currentTime;

                //console.log("update: " + audio.currentTime);

                //Add listeners for audio pause and audio end events
                audio.addEventListener("ended", this.endListener);
                audio.addEventListener("pause", this.pauseListener);
            },

            //Function to run when audio is paused by user
            pauseListener() {
                this.isPlaying = false;
                this.listenerActive = false;
                this.cleanupListeners();
            },
            //Function to run when audio play reaches the end of file
            endListener() {
                this.isPlaying = false;
                this.listenerActive = false;
                this.cleanupListeners();
            },
            //Remove listeners after audio play stops
            cleanupListeners() {
                var audio = this.$refs.player;
                audio.removeEventListener("timeupdate", this.playbackListener);
                audio.removeEventListener("ended", this.endListener);
                audio.removeEventListener("pause", this.pauseListener);

                //console.log("All cleaned up!");
            },
            toggleAudio() {
                var audio = this.$refs.player;
                //var audio = document.getElementById("audio-player");
                if (audio.paused) {
                    audio.play();
                    this.isPlaying = true;
                } else {
                    audio.pause();
                    this.isPlaying = false;
                }
            },
        },
        mounted: function() {
            // nextTick code will run only after the entire view has been rendered
            this.$nextTick(function() {

                var audio=this.$refs.player;
                //Wait for audio to load, then run initSlider() to get audio duration and set the max value of our slider
                // "loademetadata" Event https://www.w3schools.com/tags/av_event_loadedmetadata.asp
                audio.addEventListener(
                    "loadedmetadata",
                    function(e) {
                        this.initSlider();
                    }.bind(this)
                );

                // "canplay" HTML Event lets us know audio is ready for play https://www.w3schools.com/tags/av_event_canplay.asp
                audio.addEventListener(
                    "canplay",
                    function(e) {
                        this.audioLoaded=true;
                    }.bind(this)
                );

                //Wait for audio to begin play, then start playback listener function
                this.$watch("isPlaying",function() {

                    if(this.isPlaying) {
                        var audio=this.$refs.player;
                        this.initSlider();
                        //console.log("Audio playback started.");

                        //prevent starting multiple listeners at the same time
                        if(!this.listenerActive) {
                            this.listenerActive=true;

                            //for a more consistent timeupdate, include freqtimeupdate.js and replace both instances of 'timeupdate' with 'freqtimeupdate'
                            audio.addEventListener("timeupdate",this.playbackListener);
                        }
                    }

                });

                //Update current audio position when user drags progress slider
                this.$watch("playbackTime",function() {
                    var audio=this.$refs.player;

                    var diff=Math.abs(this.playbackTime-this.$refs.player.currentTime);

                    //Throttle synchronization to prevent infinite loop between playback listener and this watcher
                    if(diff>0.01) {
                        this.$refs.player.currentTime=this.playbackTime;

                    }

                });

            });
        }

    };
</script>

<style>

    input[type="range"] {
        width: 100%;
        cursor: pointer;
        height: 3px;
        background-color:#6200EE
    }
</style>