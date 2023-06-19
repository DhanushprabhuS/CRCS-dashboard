import React from 'react';
import { Button, Header } from '../Components';
import { useStateContext } from '../Contexts/ContextProvider';


const Register = () => {
    const { currentColor } = useStateContext();
    return (
        <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
            <Header category="Forms" title={"User Registeration Form"} />
            <div className='w-full flex flex-wrap lg:flex-nowrap justify-center gap-14'>
                <div class="py-12">
                    <h2 class="text-2xl font-bold">User Details</h2>
                    <div class="mt-8 max-w-md">
                        <div class="grid grid-cols-1 gap-6">
                            <label class="block">
                                <span class="text-gray-700">Select State (Head Quater)</span>
                                <select
                                    class="
                                    mt-1
                                    block
                                    w-full
                                    h-8
                                    rounded-md
                                    bg-gray-100
                                    border-transparent
                                    focus:border-gray-500 focus:bg-white focus:ring-0
                                  "
                                >
                                    <option>Andhra Pradesh</option>
                                    <option>Arunachal Pradesh</option>
                                    <option>Assam</option>
                                    <option>Bihar</option>
                                    <option>Chhattisgarh</option>
                                    <option>Goa</option>
                                    <option>Gujarat</option>
                                    <option>Haryana</option>
                                    <option>Himachal Pradesh</option>
                                    <option>Jharkhand</option>
                                    <option>Karnataka</option>
                                    <option>Kerala</option>
                                    <option>Madhya Pradesh</option>
                                    <option>Maharashtra</option>
                                    <option>Manipur</option>
                                    <option>Meghalaya</option>
                                    <option>Mizoram</option>
                                    <option>Nagaland</option>
                                    <option>Odisha</option>
                                    <option>Punjab</option>
                                    <option>Rajasthan</option>
                                    <option>Sikkim</option>
                                    <option>Tamil Nadu</option>
                                    <option>Telangana</option>
                                    <option>Tripura</option>
                                    <option>Uttar Pradesh</option>
                                    <option>Uttarakhand</option>
                                    <option>West Bengal</option>
                                    <option>Andaman and Nicobar Islands</option>
                                    <option>Chandigarh</option>
                                    <option>Dadra and Nagar Haveli and Daman and Diu</option>
                                    <option>Delhi</option>
                                    <option>Ladakh</option>
                                    <option>Lakshadweep</option>
                                    <option>Puducherry</option>
                                </select>
                            </label>

                            <label class="block">
                                <span class="text-gray-700">District Name</span>
                                <input
                                    type="text"
                                    class="
                    mt-1
                    block
                    w-full
                    h-8
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                                    placeholder=""
                                />
                            </label>
                            <label class="block">
                                <span class="text-gray-700">Select  Class of the Society</span>
                                <select
                                    class="
                                   mt-1
                                   block
                                   w-full
                                   h-8
                                   rounded-md
                                   bg-gray-100
                                   border-transparent
                                   focus:border-gray-500 focus:bg-white focus:ring-0
                                 "
                                >

                                    <option value="">Select</option>
                                    <option value="Housing Cooperative Society">Housing Cooperative Society</option>
                                    <option value="Credit Cooperative Society">Credit Cooperative Society</option>
                                    <option value="Agricultural Cooperative Society">Agricultural Cooperative Society</option>
                                    <option value="Marketing Cooperative Society">Marketing Cooperative Society</option>
                                    <option value="Consumer Cooperative Society">Consumer Cooperative Society</option>
                                    <option value="Fishermen Cooperative Society">Fishermen Cooperative Society</option>
                                    <option value="Farmers Cooperative Society">Farmers Cooperative Society</option>
                                    <option value="Processing Cooperative Society">Processing Cooperative Society</option>
                                    <option value="Retailing Cooperative Society">Retailing Cooperative Society</option>
                                    <option value="Urban Cooperative Society">Urban Cooperative Society</option>
                                    <option value="Multipurpose Cooperative Society">Multipurpose Cooperative Society</option>


                                </select>
                            </label>

                            <label className="block">
                                <span className="text-gray-700">Name</span>
                                <input
                                    type="text"
                                    className="
                    mt-1
                    block
                    w-full
                    h-8
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                                    placeholder=""
                                />
                            </label>
                            <label className="block">
                                <span className="text-gray-700">Complete Reistered Address
                                    (with PIN code)	</span>
                                <textarea
                                    className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                                    rows="3"
                                ></textarea>
                            </label>






                        </div>
                    </div>
                </div>
                <div className="py-12">
                    <h2 class="text-2xl font-bold">Personal Details</h2>
                    <div class="mt-8 max-w-md">
                        <div class="grid grid-cols-1 gap-6">
                            <label class="block">
                                <span class="text-gray-700">PAN No :</span>
                                <input
                                    type="text"
                                    class="
                    mt-1
                    block
                    w-full
                    h-8
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                                />
                            </label>

                            <label class="block">
                                <span class="text-gray-700">TAN No :</span>
                                <input
                                    type="text"
                                    class="
                                    mt-1
                                    block
                                    w-full
                                    h-8
                                    rounded-md
                                    bg-gray-100
                                    border-transparent
                                    focus:border-gray-500 focus:bg-white focus:ring-0
                                  "
                                />
                            </label>
                            <label class="block">
                                <span class="text-gray-700">Service TAX No : </span>
                                <input
                                    type="text"
                                    class="
                    mt-1
                    block
                    w-full
                    h-8
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                                    placeholder=""
                                />
                            </label>
                            <label class="block">
                                <span class="text-gray-700">Email address</span>
                                <input
                                    type="email"
                                    class="
                    mt-1
                    block
                    w-full
                    h-8
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                                    placeholder="name@example.com"
                                />
                            </label>
                            <label class="block">
                                <span class="text-gray-700">Mobile No : </span>
                                <input
                                    type="number"
                                    class="
                    mt-1
                    block
                    w-full
                    h-8
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                                    placeholder=""
                                />
                            </label>

                            <label class="block">
                                <span class="text-gray-700">Password : </span>
                                <input
                                    type="password"
                                    class="
                    mt-1
                    block
                    w-full
                    h-8
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                                    placeholder=""
                                />
                            </label>

                            <label class="block">
                                <span class="text-gray-700">Confirm Password : </span>
                                <input
                                    type="password"
                                    class="
                    mt-1
                    block
                    w-full
                    h-8
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                                    placeholder=""
                                />
                            </label>

                            <div class="block">
                                <div class="mt-2">
                                    <div>
                                        <label class="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                                                checked
                                            />
                                            <span class="ml-2">"I hereby declare that all the details provided are true."</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <Button
                    color="white"
                    bgColor={currentColor}
                    text="Submit"
                    borderRadius="10px"
                />
            </div>
        </div >
    )
}

export default Register