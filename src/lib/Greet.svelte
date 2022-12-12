<script lang="ts">
	import { invoke } from '@tauri-apps/api';
	import { rustCall } from '../utils/rust-call';

	let name = '';
	let greetMsg = '';

	async function greet() {
		// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command

		const res = await invoke<string>('greet', { name });
		console.log(res);
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
