<template>
	<div id="app">
		<keep-alive>
			<router-view v-if="$route.meta.keepAlive"/>
		</keep-alive>
		<router-view v-if="!$route.meta.keepAlive"/>
	</div>
</template>
<script lang="ts">
    import { Component, Vue, Prop } from "vue-property-decorator"
    import { Getter, Action } from 'vuex-class'
    @Component({
		components: {
		}
	})
    export default class About extends Vue {
        created() {
            //
        }
        activated() {
            //
        }

        mounted() {
            //
        }

    }
</script>

<style lang="scss">
	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
	#nav {
		padding: 30px;
		a {
			font-weight: bold;
			color: #2c3e50;
			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}
</style>
