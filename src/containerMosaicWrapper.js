

function ContainerMosaicWrapper() {
    return (
        <div className="container">
            <div className="mosaic-wrapper" data-wrapper>

                <div className="mosaic-col" data-col>
                    {/* <!-- тут будет установлен контент через js -->  */}
                </div>

                <div className="mosaic-col" data-col>
                    {/* <!-- тут будет установлен контент через js -->  */}
                </div>

                <div className="mosaic-col" data-col>
                    {/* <!-- тут будет установлен контент через js -->  */}
                </div>

            </div>

            <div className="container-btn">
                <button data-btn></button>
            </div>
        </div>
    )
}

export default ContainerMosaicWrapper
