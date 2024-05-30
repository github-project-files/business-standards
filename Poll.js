import React from 'react'

const Poll = () => {
  return (
    <div className="my-32 py-3">
        <div className="BD_news_poll">
                <h2 className='h2-title color-gray'>Poll</h2>
                <p className='BD_news_poll--desc color-gray'>LIC has had a weak debut at the bourses. Is it a good time to pick up the stock?</p>
                    <form id="BD_news_poll--form" method="post" action="index" target='_blank'>
                        <input name="clientId" type="hidden" value="CLIENT_ID(POLL_USER_ID)" data-amp-replace="CLIENT_ID" />
                        <label className='radio-label'><input type="radio" value="0" name="answer" />
                            <span class="lbl">Yes, It can't drop much further</span>
                            <span class="check"></span>
                        </label>
                        <label className='radio-label'>
                            <input type="radio" value="1" name="answer" />
                            <span class="lbl">No, I am waiting for it to bottom out</span>
                            <span class="check"></span>
                        </label>
                        <div submit-success className='poll-success'>
                            Success! Thanks
                        </div>
                        <div submit-error className='poll-error'>
                            Error! Thanks
                        </div>
                        <div className='BD_news_poll--submit'>
                            <a href="#" className='view-all-link font-inter color-red'>View All Polls</a>
                            <button type="button" class="btn btn-danger">Submit</button>
                        </div>
                    </form>
        </div>
</div>
  )
}

export default Poll