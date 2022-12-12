import { invoke } from '@tauri-apps/api';

interface IRustResponse<T> {
	data?: T;
	error?: any;
}

interface InvokeArgs {
	[key: string]: unknown;
}

type Command = 'greet';

export async function rustCall<T>(cmd: Command, args?: InvokeArgs): Promise<IRustResponse<T>> {
	try {
		const res = await invoke<T>(cmd, args);
	
		return { data: res };
	} catch (error) {
		return { error };
	}
}
