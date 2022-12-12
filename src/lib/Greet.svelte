<script lang="ts">
  import { rustCall } from "src/utils/rust-call.js";

	let name: string = '';
	let greetMsg: string = '';

	async function greet() {
		// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command

		const { data, error } = await rustCall<string>('greet', { name });
		if (error) {
			greetMsg = error.message;
			return;
		}
		name = '';
		greetMsg = data;

		// console.log(error);
	}
</script>

<div>
	<form class="row" on:submit|preventDefault={greet}>
		<input id="greet-input" placeholder="Enter a name..." bind:value={name} />
		<button type="submit"> Greet </button>
	</form>
	<p>{greetMsg}</p>
</div>
