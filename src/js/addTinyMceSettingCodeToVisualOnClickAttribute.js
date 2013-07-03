// The MIT License (MIT)
// 
// Copyright (c) 2013 Pulse Storm LLC. 
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

setTimeout(function () {
    var e = document.getElementById('pulseStormHtmlHoldingArea'),
        ed;
    if (!e) {
        //console.log('no element');
        return;
    }
    if (e.value === 'no_action') {
        //console.log('no value is no_action');
        return;
    }
    if (!e.value) {
        //console.log('no e.value');
        return;
    }
    document.forms.post.content = e.value;
    ed = tinyMCE.get('content');
    if (ed) {
        //console.log('founs editor');
        ed.setContent(e.value);
    }
    e.value = 'no_action';
}, 1000);
