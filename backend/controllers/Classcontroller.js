exports.createClass = async (req, res) => {
    try {
        const { className, teacher, subject, grade, schedule } = req.body;

        const newClass = new Class({
            className,
            teacher,
            subject,
            grade,  // Adding grade to class creation
            schedule,
        });

        await newClass.save();
        res.status(201).json({ message: 'Class created successfully', class: newClass });
    } catch (error) {
        res.status(500).json({ message: 'Error creating class', error });
    }
};

exports.editClass = async (req, res) => {
    try {
        const { classId } = req.params;
        const { className, subject, grade, schedule } = req.body;

        const updatedClass = await Class.findByIdAndUpdate(
            classId,
            { className, subject, grade, schedule },  // Allow grade to be updated
            { new: true }
        );

        if (!updatedClass) {
            return res.status(404).json({ message: 'Class not found' });
        }

        res.status(200).json({ message: 'Class updated successfully', class: updatedClass });
    } catch (error) {
        res.status(500).json({ message: 'Error updating class', error });
    }
};
