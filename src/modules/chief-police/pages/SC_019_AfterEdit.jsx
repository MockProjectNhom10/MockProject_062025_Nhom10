import FormSection from "@chief-police/components/sections/FormSection";

const SC_019_AfterEdit = () => {
    const dataEdit = () => {
        // call API
    };

    return (
        <div className="bg-[#E7E7E7] pb-[30px]">
            
            <div className="bg-teal-500 px-4 sm:px-6 py-4 rounded-t-lg mb-6">
                <h1 className="text-white text-center font-bold uppercase text-base sm:text-lg">
                    Preliminary Physical Evidence Information: PE-01
                </h1>
            </div>

            <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-[50px] space-y-6">
                <FormSection title="OVERVIEW">
                    <div className="border p-3 rounded bg-gray-50 text-sm text-gray-700">
                        <p>
                            <strong>Temporary Identification Code:</strong> PE-01
                        </p>
                        <p>
                            <strong>Collector:</strong> Lieutenant James Porter, Forensic
                            Technician
                        </p>
                        <p>
                            <strong>Time of Collection:</strong> 14:36, June 25, 2025
                        </p>
                        <p>
                            <strong>Location of Collection:</strong> On the kitchen floor near
                            the victim’s right hand (Position A1 in the crime scene sketch)
                        </p>
                    </div>
                </FormSection>

                <FormSection title="DETAILED DESCRIPTION">
                    <div className="border p-3 rounded bg-gray-50 text-sm text-gray-700">
                        A stainless steel kitchen knife, approximately 25 cm long, with
                        visible reddish-brown stains (suspected blood) on the blade.
                    </div>
                </FormSection>

                <FormSection title="INITIAL CONDITION">
                    <div className="border p-3 rounded bg-gray-50 text-sm text-gray-700">
                        The knife was lying on its side, blade facing inward, with no
                        apparent signs of disturbance or tampering.
                    </div>
                </FormSection>

                <FormSection title="INITIAL PRESERVATION MEASURES">
                    <div className="border p-3 rounded bg-gray-50 text-sm text-gray-700">
                        The knife was collected using sterile gloves, placed in a
                        transparent plastic evidence bag with a tamper-proof seal labeled
                        “PE-01”, and stored in a dry, padded evidence box for transport to
                        the forensic lab.
                    </div>
                </FormSection>

                {/* Buttons */}
                <div className="flex sm:flex-row justify-end gap-4 pt-2">
                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-[100px] sm:w-auto">
                        Edit
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded w-[100px] sm:w-auto">
                        Delete
                    </button>
                    <button className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded w-[100px] sm:w-auto">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SC_019_AfterEdit;
