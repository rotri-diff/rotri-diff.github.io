function updateOverallVideo() {
    // 获取下拉菜单选择的值
    const modelValue = document.getElementById('overall-menu-models').value;
    const taskValue = document.getElementById('overall-menu-tasks').value.replace(/ /g, "_");
    const variationValue = (parseInt(document.getElementById('overall-menu-variations').value) - 1).toString();

    // 更新原始模型视频
    const vanillaVideo = document.getElementById('vanilla-video');
    const vanillaSource = vanillaVideo.querySelector('source');
    vanillaSource.src = `static/video/${modelValue}/${taskValue}_variation_${variationValue}.mp4`;
    vanillaVideo.load();

    // 更新DeCo模型视频
    const decoVideo = document.getElementById('deco-video');
    const decoSource = decoVideo.querySelector('source');
    decoSource.src = `static/video/deco_${modelValue}/${taskValue}_variation_${variationValue}.mp4`;
    decoVideo.load();

    // 更新标签显示
    document.getElementById('vanilla-label').innerText = `${modelValue}`;
    document.getElementById('deco-label').innerText = `${modelValue} + DeCo`;
}


// Dictionary for task names and their captions
const taskCaptions = {
    "put_in_without_close": ["put the yellow block in the bottom drawer. (success)", "put the yellow block in the top drawer. (success)", "put the blue block in the bottom drawer. (success)", "put the blue block in the top drawer. (success)"],
    "put_in_and_close": ["put the yellow block in the bottom drawer and close it. (success)", "put the yellow block in the top drawer and close it. (success)", "put the blue block in the bottom drawer and close it. (success)", "put the blue block in the top drawer and close it. (success)"],
    "take_out_without_close": ["take the yellow block out of the bottom drawer and place the yellow block on the drawer's surface. (success)", "take the yellow block out of the top drawer and place the yellow block on the drawer's surface. (success)", "take the blue block out of the bottom drawer and place the blue block on the drawer's surface. (success)", "take the blue block out of the top drawer and place the blue block on the drawer's surface. (success)"],
    "take_out_and_close": ["take the yellow block out of the bottom drawer, place the yellow block on the drawer's surface, and then close the bottom drawer. (success)", "take the yellow block out of the top drawer, place the yellow block on the drawer's surface, and then close the top drawer. (success)", "take the blue block out of the bottom drawer, place the blue block on the drawer's surface, and then close the bottom drawer. (success)", "take the blue block out of the top drawer, place the blue block on the drawer's surface, and then close the top drawer. (success)"],
    "put_two_in_different": ["put the yellow block in the bottom drawer and put the blue block in the top drawer. (success)", "put the yellow block in the top drawer and put the blue block in the bottom drawer. (success)", "put the blue block in the bottom drawer and put the yellow block in the top drawer. (success)", "put the blue block in the top drawer and put the yellow block in the bottom drawer. (success)"],
    "take_two_out_of_different": ["take the yellow block out of the bottom drawer and take the blue block out of the top drawer. (success)", "take the yellow block out of the top drawer and take the blue block out of the bottom drawer. (success)", "take the blue block out of the bottom drawer and take the yellow block out of the top drawer. (success)", "take the blue block out of the top drawer and take the yellow block out of the bottom drawer. (success)"],
    "block_exchange": ["exchange the positions of the two blocks. (success)", "exchange the positions of the two blocks. (success)"],
    "on_and_in_different": ["place both blocks on the drawer's surface, then put the yellow block in the bottom drawer and the blue block in the top drawer. (success)", "place both blocks on the drawer's surface, then put the yellow block in the top drawer and the blue block in the bottom drawer. (success)"],
    "out_of_different_and_off": ["take the yellow block out of the bottom drawer and take the blue block out of the top drawer, then put both blocks on the table. (success)"],
};

function updateSingleVideo() {
    const taskValue = document.getElementById('single-menu-tasks').value.replace(/ /g, "_");
    const instanceValue = document.getElementById('single-menu-instances').value;

    // Base path for the single-task video
    const basePath = 'static/video/real/';

    // Update the video source directly
    const videoElement = document.getElementById('multi-task-result-video');
    videoElement.src = `${basePath}${taskValue}_v${instanceValue}.mp4`;
    videoElement.load(); // Reload video with new source
    
    // Update the title based on the selected task and instance
    const titleElement = document.getElementById('video-title');
    titleElement.innerHTML = `<b>${taskCaptions[taskValue][instanceValue]}</b>`; // Use innerHTML to maintain bold
}